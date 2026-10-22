// Runs before every build. Ranks my public repos by how many commits I pushed
// to them in the last 90 days and writes the top ones to src/data/repos.json.
// If GitHub can't be reached the committed snapshot is kept, so a build never
// fails because of the network.

import { readFile, writeFile } from 'node:fs/promises'

const USER = 'Greenythebeany'
const DAYS = 90
const WEEKS = 13
const TOP = 6
const OUT = new URL('../src/data/repos.json', import.meta.url)
const EXCLUDE = new URL('../src/data/repos-exclude.json', import.meta.url)

const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN
const headers = {
  Accept: 'application/vnd.github+json',
  'User-Agent': `${USER}-portfolio-build`,
  ...(token && { Authorization: `Bearer ${token}` }),
}

async function gh(path) {
  const res = await fetch(`https://api.github.com${path}`, { headers })
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} on ${path}`)
  return res.json()
}

async function commitDates(repo, since) {
  const dates = []
  for (let page = 1; page <= 10; page++) {
    const batch = await gh(
      `/repos/${USER}/${repo}/commits?author=${USER}&since=${since}&per_page=100&page=${page}`,
    )
    dates.push(...batch.map((c) => c.commit.author.date))
    if (batch.length < 100) break
  }
  return dates
}

async function main() {
  const exclude = new Set(JSON.parse(await readFile(EXCLUDE, 'utf8')).map((n) => n.toLowerCase()))
  const now = Date.now()
  const since = new Date(now - DAYS * 864e5).toISOString()

  const repos = (await gh(`/users/${USER}/repos?per_page=100&type=owner`)).filter(
    (r) =>
      !r.fork &&
      !r.archived &&
      !r.private &&
      !exclude.has(r.name.toLowerCase()) &&
      new Date(r.pushed_at) > new Date(since),
  )

  const ranked = []
  for (const r of repos) {
    let dates
    try {
      dates = await commitDates(r.name, since)
    } catch (e) {
      // an empty repo answers 409; anything else (rate limit, outage) would
      // leave a partial ranking, so give up and keep the snapshot instead
      if (String(e.message).startsWith('409')) continue
      throw e
    }
    if (!dates.length) continue

    // commits per week, oldest first, for the activity strip
    const weeks = Array(WEEKS).fill(0)
    for (const d of dates) {
      const ago = Math.floor((now - new Date(d)) / (7 * 864e5))
      if (ago < WEEKS) weeks[WEEKS - 1 - ago] += 1
    }

    ranked.push({
      name: r.name,
      url: r.html_url,
      homepage: r.homepage || null,
      description: r.description || null,
      language: r.language,
      stars: r.stargazers_count,
      pushedAt: r.pushed_at,
      commits: dates.length,
      weeks,
    })
  }

  if (!ranked.length) throw new Error('no active repos found')
  ranked.sort((a, b) => b.commits - a.commits || b.pushedAt.localeCompare(a.pushedAt))
  const data = { generatedAt: new Date(now).toISOString(), days: DAYS, repos: ranked.slice(0, TOP) }
  await writeFile(OUT, JSON.stringify(data, null, 2) + '\n')
  console.log(`[repos] ${data.repos.map((r) => `${r.name} (${r.commits})`).join(', ')}`)
}

main().catch((e) => {
  console.warn(`[repos] keeping the committed snapshot: ${e.message}`)
})
