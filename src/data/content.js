/* Every string on the site lives here as an { en, sk } pair, so the two
   languages can never drift apart. Components read them through `t()`.
   Slovak single-letter prepositions get their non-breaking space from `t()`,
   so write them with a normal space here. */

export const site = {
  name: 'GreenyBeany',
  realName: 'Matúš Ondrejka',
  version: 'V5.0',
  location: { en: 'Bratislava, SK', sk: 'Bratislava, SK' },
  github: 'https://github.com/Greenythebeany',
  triptych: 'https://greenybeany.dev/triptych/',
  cv: `${import.meta.env.BASE_URL}cv.pdf`,
}

export const ui = {
  skip: { en: 'Skip to content', sk: 'Preskočiť na obsah' },
  sections: { en: 'Sections', sk: 'Sekcie' },
  menu: { en: 'Menu', sk: 'Menu' },
  close: { en: 'Close', sk: 'Zavrieť' },
  langKey: { en: 'Switch to Slovak', sk: 'Prepnúť do angličtiny' },
  themeKey: { en: 'Switch theme', sk: 'Prepnúť tému' },
  motionKey: { en: 'Turn animations on or off', sk: 'Zapnúť alebo vypnúť animácie' },
  motion: { en: 'Motion', sk: 'Pohyb' },
  dark: { en: 'Dark', sk: 'Tmavá' },
  light: { en: 'Light', sk: 'Svetlá' },
  ok: { en: 'OK', sk: 'OK' },
  newTab: { en: '(opens in a new tab)', sk: '(otvorí sa na novej karte)' },
  clock: { en: 'Local time in Bratislava', sk: 'Miestny čas v Bratislave' },
}

export const nav = [
  { id: 'about', num: '01', label: { en: 'About', sk: 'O mne' } },
  { id: 'cv', num: '02', label: { en: 'Curriculum', sk: 'Životopis' } },
  { id: 'timetable', num: '03', label: { en: 'Timetable', sk: 'Rozvrh' } },
  { id: 'projects', num: '04', label: { en: 'Projects', sk: 'Projekty' } },
]

export const boot = {
  // the first line is the banner; the rest render as `TEXT ....... STATUS`
  banner: { en: 'GreenyBeany BIOS (C) 2026 — version 5.0', sk: 'GreenyBeany BIOS (C) 2026 — verzia 5.0' },
  lines: [
    { text: { en: 'Power-on self test', sk: 'Test po zapnutí' }, status: { en: 'OK', sk: 'OK' } },
    { text: { en: 'Bc. degree', sk: 'Bakalársky titul' }, status: { en: 'Verified', sk: 'Overený' } },
    { text: { en: 'Mounting Ing. programme', sk: 'Pripájam inžinierske štúdium' }, status: { en: 'OK', sk: 'OK' } },
    { text: { en: 'Syncing active repositories', sk: 'Synchronizujem aktívne repozitáre' }, status: { en: 'OK', sk: 'OK' } },
  ],
  skip: { en: 'Press any key to skip', sk: 'Stlač ľubovoľný kláves a preskoč' },
}

export const hero = {
  eyebrow: {
    en: 'Robotics · Embedded · Control',
    sk: 'Robotika · Embedded · Riadenie',
  },
  title: [
    { en: 'The meaning', sk: 'Zmysel' },
    { en: 'is in', sk: 'je v' },
    { en: 'building things.', sk: 'tvorení vecí.' },
  ],
  lead: {
    en: "I'm Matúš, also known as GreenyBeany. I finished my Bc. in Robotics & Cybernetics at STU FEI this summer and I'm now in the first year of the Ing. programme. Between lectures I build desktop apps, robot tools and the occasional odd web experiment.",
    sk: 'Som Matúš, na internete GreenyBeany. Toto leto som dokončil bakalára z robotiky a kybernetiky na STU FEI a teraz som v prvom ročníku inžinierskeho štúdia. Popri prednáškach robím desktopové aplikácie, nástroje pre robotiku a občas nejaký čudný webový experiment.',
  },
  ctaProjects: { en: 'See what I’m building', sk: 'Pozri, na čom pracujem' },
  ctaCv: { en: 'Download CV', sk: 'Stiahnuť CV' },
  panel: { en: 'System information', sk: 'Informácie o systéme' },
  meta: [
    { key: { en: 'Operator', sk: 'Operátor' }, val: { en: 'Matúš Ondrejka', sk: 'Matúš Ondrejka' } },
    {
      key: { en: 'Programme', sk: 'Štúdium' },
      val: { en: 'Ing. · Robotics & Cybernetics', sk: 'Ing. · Robotika a kybernetika' },
    },
    { key: { en: 'Faculty', sk: 'Fakulta' }, val: { en: 'STU FEI Bratislava', sk: 'STU FEI Bratislava' } },
    { key: { en: 'Year', sk: 'Ročník' }, val: { en: '1st (since Sep 2026)', sk: '1. (od sept. 2026)' } },
    { key: { en: 'Bc.', sk: 'Bc.' }, val: { en: 'Completed 2026', sk: 'Ukončené 2026' } },
    { key: { en: 'Focus', sk: 'Zameranie' }, val: { en: 'Embedded · Control · 3D', sk: 'Embedded · Riadenie · 3D' } },
  ],
  activity: {
    label: { en: 'Commits, last 90 days', sk: 'Commity za 90 dní' },
    top: { en: 'Most active', sk: 'Najaktívnejšie' },
  },
}

export const about = {
  eyebrow: { en: 'About me', sk: 'O mne' },
  title: { en: 'Built on ', sk: 'Postavené na ' },
  titleEm: { en: 'curiosity.', sk: 'zvedavosti.' },
  lead: {
    en: 'I like problems that sit between hardware and software: a motor that has to hold a position, a robot arm that needs its kinematics worked out, a tool that makes a boring task disappear. Most of what I learn, I learn by building it.',
    sk: 'Baví ma, keď sa problém nachádza niekde medzi hardvérom a softvérom: motor, ktorý má držať polohu, robotické rameno, ktorému treba vyrátať kinematiku, alebo nástroj, vďaka ktorému zmizne otravná úloha. Väčšinu vecí sa naučím tak, že ich postavím.',
  },
  cards: [
    {
      id: 'hobbies',
      title: { en: 'Hobbies', sk: 'Záľuby' },
      body: {
        en: 'Coding, 3D printing, hacking on Arduino & ESP32, retrofuturism-inspired art, and robotics projects that push my skills further. I love experimenting and learning from every attempt — successful or not.',
        sk: 'Programovanie, 3D tlač, experimenty s Arduinom a ESP32, retrofuturistické umenie a robotické projekty, ktoré ma posúvajú ďalej. Rád skúšam nové prístupy a učím sa z každého pokusu — úspešného aj neúspešného.',
      },
    },
    {
      id: 'philosophy',
      title: { en: 'Philosophy', sk: 'Filozofia' },
      body: {
        en: 'Technology has the power to make the world better. Every project is a chance to grow, learn, and combine logic with creativity — to create solutions that matter and spark joy in the process of making.',
        sk: 'Technológie majú moc zmeniť svet k lepšiemu. Každý projekt je šanca rásť, učiť sa a spájať logiku s kreativitou — tvoriť riešenia, ktoré majú zmysel a prinášajú radosť z procesu tvorby.',
      },
    },
  ],
}

export const cv = {
  eyebrow: { en: 'Curriculum vitae', sk: 'Životopis' },
  title: { en: 'The ', sk: 'Cesta ' },
  titleEm: { en: 'journey.', sk: 'vpred.' },
  download: { en: 'Download full CV (PDF)', sk: 'Stiahnuť celý životopis (PDF)' },

  headings: {
    education: { en: 'Education', sk: 'Vzdelanie' },
    skills: { en: 'Skills', sk: 'Zručnosti' },
    languages: { en: 'Languages', sk: 'Jazyky' },
    certificates: { en: 'Certificates', sk: 'Certifikáty' },
    interests: { en: 'Interests', sk: 'Záujmy' },
  },

  current: { en: 'Current', sk: 'Aktuálne' },

  education: [
    {
      current: true,
      role: { en: 'Robotics & Cybernetics — Ing. (Master’s)', sk: 'Robotika a kybernetika — Ing.' },
      place: {
        en: 'Faculty of Electrical Engineering and Information Technology, STU Bratislava',
        sk: 'Fakulta elektrotechniky a informatiky, STU Bratislava',
      },
      when: { en: 'Sep 2026 — present', sk: 'sept. 2026 — doteraz' },
    },
    {
      role: { en: 'Robotics & Cybernetics — Bc. (Bachelor’s)', sk: 'Robotika a kybernetika — Bc.' },
      place: {
        en: 'Faculty of Electrical Engineering and Information Technology, STU Bratislava',
        sk: 'Fakulta elektrotechniky a informatiky, STU Bratislava',
      },
      when: { en: 'Sep 2023 — Jun 2026', sk: 'sept. 2023 — jún 2026' },
    },
    {
      role: { en: 'Grammar School', sk: 'Gymnázium' },
      place: { en: 'Ružomberok, Slovakia', sk: 'Ružomberok, Slovensko' },
      when: { en: 'Sep 2019 — Jun 2023', sk: 'sept. 2019 — jún 2023' },
    },
  ],

  skills: [
    { name: 'C', level: 90, tag: { en: 'Advanced', sk: 'Pokročilý' } },
    { name: 'Java', level: 70, tag: { en: 'Intermediate', sk: 'Mierne pokročilý' } },
    { name: 'Python', level: 70, tag: { en: 'Intermediate', sk: 'Mierne pokročilý' } },
    { name: 'HTML / CSS', level: 70, tag: { en: 'Intermediate', sk: 'Mierne pokročilý' } },
  ],
  skillLabel: { en: '{name}: {level} percent', sk: '{name}: {level} percent' },

  languages: [
    { name: { en: 'Slovak', sk: 'Slovenčina' }, level: { en: 'Native', sk: 'Materinský jazyk' } },
    { name: { en: 'English', sk: 'Angličtina' }, level: { en: 'B2 · Upper-intermediate', sk: 'B2 · Vyššia stredná úroveň' } },
    { name: { en: 'French', sk: 'Francúzština' }, level: { en: 'A2 · Elementary', sk: 'A2 · Základná úroveň' } },
  ],

  certificates: [
    {
      name: { en: 'Google AI Professional Certificate', sk: 'Google AI Professional Certificate' },
      issuer: { en: 'Google · Coursera · 8 courses', sk: 'Google · Coursera · 8 kurzov' },
      when: { en: 'Oct 2026', sk: 'okt. 2026' },
      url: 'https://coursera.org/verify/professional-cert/EUQKBQWMSOUQ',
      verify: { en: 'Verify', sk: 'Overiť' },
    },
  ],

  interests: [
    {
      en: 'Microcontrollers (Arduino, Raspberry Pi) and robotic prototypes',
      sk: 'Mikrokontroléry (Arduino, Raspberry Pi) a robotické prototypy',
    },
    { en: '3D modelling and printing functional parts', sk: '3D modelovanie a tlač funkčných dielov' },
    {
      en: 'Control systems, robotics and automation',
      sk: 'Riadiace systémy, robotika a automatizácia',
    },
    { en: 'Cycling, hiking, exploring new places', sk: 'Cyklistika, turistika, objavovanie nových miest' },
  ],
}

/* Winter semester 2026/27, from the AIS export (rozvrh.ics). */
export const timetable = {
  eyebrow: { en: 'Winter semester 2026/27', sk: 'Zimný semester 2026/27' },
  title: { en: 'My ', sk: 'Môj ' },
  titleEm: { en: 'timetable.', sk: 'rozvrh.' },
  // first and last teaching day; outside this range nothing is "live"
  term: { start: '2026-09-14', end: '2026-12-17' },
  legend: {
    lecture: { en: 'Lecture', sk: 'Prednáška' },
    lab: { en: 'Lab / Seminar', sk: 'Cvičenie' },
  },
  status: {
    now: { en: 'In class', sk: 'Na hodine' },
    next: { en: 'Next', sk: 'Ďalej' },
    free: { en: 'Free', sk: 'Voľno' },
    off: { en: 'Off term', sk: 'Mimo semestra' },
  },
  slotCount: { en: '{n} slots', sk: '{n} hod.' },
  days: [
    {
      day: { en: 'Monday', sk: 'Pondelok' },
      slots: [
        {
          from: '17:00',
          to: '18:50',
          lab: true,
          name: { en: 'Mechatronic Systems Control', sk: 'Riadenie mechatronických systémov' },
          who: 'Ľ. Chovanec · d601',
        },
      ],
    },
    {
      day: { en: 'Tuesday', sk: 'Utorok' },
      slots: [
        {
          from: '10:00',
          to: '11:50',
          name: { en: 'Artificial Intelligence 2', sk: 'Umelá inteligencia 2' },
          who: 'I. Sekaj · ab300',
        },
        {
          from: '13:00',
          to: '14:50',
          name: { en: 'Embedded Control Systems', sk: 'Vnorené riadiace systémy' },
          who: 'J. Stanko · de150',
        },
      ],
    },
    {
      day: { en: 'Wednesday', sk: 'Streda' },
      slots: [
        {
          from: '08:00',
          to: '09:50',
          name: { en: 'System Identification', sk: 'Identifikácia systémov' },
          who: 'E. Miklovičová · de150',
        },
        {
          from: '10:00',
          to: '11:50',
          name: { en: 'Mechatronic Systems Control', sk: 'Riadenie mechatronických systémov' },
          who: 'P. Hubinský · de150',
        },
        {
          from: '13:00',
          to: '14:50',
          name: { en: 'Nonlinear Systems Control', sk: 'Riadenie nelineárnych systémov' },
          who: 'M. Halás · de150',
        },
        {
          from: '15:00',
          to: '16:50',
          lab: true,
          name: { en: 'Artificial Intelligence 2', sk: 'Umelá inteligencia 2' },
          who: 'F. Zúbek · d712',
        },
      ],
    },
    {
      day: { en: 'Thursday', sk: 'Štvrtok' },
      slots: [
        {
          from: '08:00',
          to: '09:50',
          lab: true,
          name: { en: 'Embedded Control Systems', sk: 'Vnorené riadiace systémy' },
          who: 'D. Szépvölgyi · d712',
        },
        {
          from: '10:00',
          to: '11:50',
          lab: true,
          name: { en: 'Nonlinear Systems Control', sk: 'Riadenie nelineárnych systémov' },
          who: 'J. Kardoš · d405',
        },
        {
          from: '13:00',
          to: '14:50',
          lab: true,
          name: { en: 'System Identification', sk: 'Identifikácia systémov' },
          who: 'E. Miklovičová · d328',
        },
      ],
    },
  ],
}

/* The repos themselves come from src/data/repos.json, written at build time
   by scripts/fetch-repos.mjs. Here each one gets a title and an { en, sk }
   description; a repo without an entry falls back to its GitHub description. */
export const projects = {
  eyebrow: { en: 'Most active right now', sk: 'Práve najaktívnejšie' },
  title: { en: 'What I’m ', sk: 'Na čom ' },
  titleEm: { en: 'building.', sk: 'pracujem.' },
  lead: {
    en: 'Ranked by my commits over the last 90 days and refreshed every night straight from GitHub.',
    sk: 'Zoradené podľa mojich commitov za posledných 90 dní a každú noc obnovené priamo z GitHubu.',
  },
  status: { en: '{n} active', sk: '{n} aktívnych' },
  module: { en: 'Process', sk: 'Proces' },
  commits: { en: '{n} commits / 90 days', sk: '{n} commitov / 90 dní' },
  activity: {
    en: '{n} commits in the last 13 weeks, oldest week first',
    sk: '{n} commitov za posledných 13 týždňov, od najstaršieho týždňa',
  },
  updated: { en: 'Last push', sk: 'Posledný push' },
  open: { en: 'Open on GitHub', sk: 'Otvoriť na GitHube' },
  site: { en: 'Website', sk: 'Web' },
  all: { en: 'All repositories on GitHub', sk: 'Všetky repozitáre na GitHube' },
  synced: { en: 'Synced {date}', sk: 'Synchronizované {date}' },
  details: {
    jellywave: {
      title: 'JellyWave',
      tag: 'Electron · Capacitor · Jellyfin',
      desc: {
        en: 'A Spotify-style music client for your own Jellyfin server, on desktop and Android. Gapless playback with crossfade, synced lyrics, ReplayGain, Discord Rich Presence and 15 languages.',
        sk: 'Hudobný klient v štýle Spotify pre vlastný Jellyfin server, na desktope aj Androide. Plynulé prehrávanie s crossfadom, synchronizované texty, ReplayGain, Discord Rich Presence a 15 jazykov.',
      },
    },
    BeanyIK: {
      title: 'BeanyIK',
      tag: 'Electron · Kinematics',
      desc: {
        en: 'A drag & drop robot kinematics builder. Chain joints with DH parameters or custom matrices, then solve forward and inverse kinematics and watch the arm move.',
        sk: 'Skladačka kinematiky robotov štýlom drag & drop. Pospájaš kĺby cez DH parametre alebo vlastné matice, vyrátaš priamu aj inverznú kinematiku a rameno sa rovno pohne.',
      },
    },
    BeanyLab: {
      title: 'BeanyLab',
      tag: 'Rust · Tauri · Numerics',
      desc: {
        en: 'An open-source numeric computing environment that runs .m files, with a block-diagram simulator. Clean-room, Apache-2.0, for Windows and Linux.',
        sk: 'Open-source prostredie na numerické výpočty, ktoré spúšťa .m súbory a má aj simulátor blokových schém. Napísané od nuly, Apache-2.0, pre Windows aj Linux.',
      },
    },
    BeanyDrive: {
      title: 'BeanyDrive',
      tag: 'Electron · Discord API',
      desc: {
        en: 'Turns a Discord text channel into personal cloud storage. Splits files into chunks, uploads them as attachments and rebuilds them on download, all from a keyboard-driven terminal UI.',
        sk: 'Z textového kanála na Discorde spraví osobné cloudové úložisko. Súbory rozdelí na časti, nahrá ich ako prílohy a pri sťahovaní ich zase poskladá, všetko cez terminálové UI ovládané klávesnicou.',
      },
    },
    BetterAis: {
      title: 'BetterAIS',
      tag: 'Chrome extension · CSS',
      desc: {
        en: 'A Chrome extension that gives is.stuba.sk a calmer, modern look: better typography, a cleaner layout and less clutter for the daily AIS routine.',
        sk: 'Rozšírenie pre Chrome, ktoré dá is.stuba.sk pokojnejší a modernejší vzhľad: lepšiu typografiu, čistejšie rozloženie a menej neporiadku pri každodennom AIS-e.',
      },
    },
    AkoSUmelou: {
      title: 'Ako s umelou',
      tag: 'Web · Course',
      desc: {
        en: 'A free beginner course on AI in Slovak, covering ChatGPT, Claude and Gemini for people who have never used them.',
        sk: 'Bezplatný kurz umelej inteligencie v slovenčine pre úplných začiatočníkov, o ChatGPT, Claude a Gemini.',
      },
    },
    BeanyBox: {
      title: 'BeanyBox',
      tag: 'Electron · Gmail API',
      desc: {
        en: 'A terminal-styled desktop mail client for Gmail. Threads, labels and search rendered as a green-on-black console instead of yet another web view.',
        sk: 'Desktopový mailový klient pre Gmail v štýle terminálu. Vlákna, štítky a vyhľadávanie ako zelená konzola namiesto ďalšieho webového okna.',
      },
    },
    'Beany-s-Discord-Quest-Maker': {
      title: 'Beany’s Quest Maker',
      tag: 'TUI · Discord API',
      desc: {
        en: 'A TUI app that completes Discord’s Orb quests by simulating the play session, watching the progress endpoint and claiming the reward.',
        sk: 'TUI aplikácia, ktorá splní Discord Orb questy: odsimuluje hernú reláciu, sleduje progres a vyzdvihne odmenu.',
      },
    },
    BeanyBundle: {
      title: 'BeanyBundle',
      tag: 'Web · Launcher',
      desc: {
        en: 'The terminal-styled home for all my desktop apps: one carousel hub that links to BeanyBox, BeanyDrive and the Quest Maker.',
        sk: 'Domovská stránka všetkých mojich desktopových aplikácií v štýle terminálu: jeden rozcestník s odkazmi na BeanyBox, BeanyDrive a Quest Maker.',
      },
    },
    LWM: {
      title: 'Learn With Me',
      tag: 'React · Markdown',
      desc: {
        en: 'A study site for the Slovak school-leaving exam: maths, Slovak, English and German in one place, written in Markdown.',
        sk: 'Študijná stránka na prípravu na maturitu: matematika, slovenčina, angličtina a nemčina na jednom mieste, písané v Markdowne.',
      },
    },
    InstaDeReeler: {
      title: 'InstaDeReeler',
      tag: 'Kotlin · Xposed',
      desc: {
        en: 'An Xposed module that removes Reels from Instagram’s feed, Explore and tab bar, while Reels sent in DMs still play.',
        sk: 'Xposed modul, ktorý odstráni Reels z Instagramového feedu, Preskúmať aj spodnej lišty, no Reels poslané v správach sa stále prehrajú.',
      },
    },
    timetable: {
      title: 'FEI STU Timetable',
      tag: 'Web · Drag & drop',
      desc: {
        en: 'An interactive timetable for FEI STU students: import the AIS Excel export, drag seminars into the slots you want, export the result as PDF.',
        sk: 'Interaktívny rozvrh pre študentov FEI STU: naimportuješ Excel export z AIS-u, presunieš cvičenia do termínov, ktoré chceš, a výsledok exportuješ do PDF.',
      },
    },
  },
}

export const footer = {
  halted: { en: 'Thanks for stopping by — system halted', sk: 'Vďaka za návštevu — systém zastavený' },
  cvLink: { en: 'CV', sk: 'CV' },
  github: { en: 'GitHub', sk: 'GitHub' },
  triptych: { en: 'Triptych music player', sk: 'Hudobný prehrávač Triptych' },
  top: { en: 'Back to top', sk: 'Späť hore' },
}
