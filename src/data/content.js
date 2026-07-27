/* Every string on the site lives here as an { en, sk } pair, so the two
   languages can never drift apart. Components read them through `t()`. */

export const site = {
  name: 'GreenyBeany',
  realName: 'Matúš Ondrejka',
  version: 'V4.0',
  location: 'BRATISLAVA, SK',
  github: 'https://github.com/Greenythebeany',
  cv: `${import.meta.env.BASE_URL}cv.pdf`,
}

export const nav = [
  { id: 'about', num: '01', label: { en: 'About', sk: 'O mne' } },
  { id: 'cv', num: '02', label: { en: 'Curriculum', sk: 'Životopis' } },
  { id: 'timetable', num: '03', label: { en: 'Timetable', sk: 'Rozvrh' } },
  { id: 'projects', num: '04', label: { en: 'Projects', sk: 'Projekty' } },
]

export const boot = [
  { en: 'GREENYBEANY BIOS (C) 2026 — VERSION 4.0', sk: 'GREENYBEANY BIOS (C) 2026 — VERZIA 4.0' },
  { en: 'POST ..................................... OK', sk: 'POST ..................................... OK' },
  { en: 'OPERATOR DETECTED ON CHANNEL 0 ........... OK', sk: 'OPERÁTOR NÁJDENÝ NA KANÁLI 0 ............. OK' },
  { en: 'MOUNTING /dev/curiosity .................. OK', sk: 'PRIPÁJAM /dev/curiosity .................. OK' },
  { en: 'LOADING PORTFOLIO ........................ OK', sk: 'NAČÍTAVAM PORTFÓLIO ...................... OK' },
]

export const hero = {
  eyebrow: {
    en: 'Robotics · Embedded · Networking',
    sk: 'Robotika · Embedded · Siete',
  },
  title: [
    { en: 'The meaning', sk: 'Význam' },
    { en: 'is in', sk: 'je v' },
    { en: 'building things.', sk: 'tvorení vecí.' },
  ],
  lead: {
    en: "Hi, I'm Matúš (a.k.a. GreenyBeany). I study Robotics & Cybernetics at STU FEI. I turn ideas into real-world projects — embedded systems, robotics, and the occasional weird web experiment.",
    sk: 'Ahoj, som Matúš (GreenyBeany). Študujem Robotiku a Kybernetiku na STU FEI. Premieňam nápady na reálne projekty — vstavané systémy, robotika a občas aj zvláštne webové experimenty.',
  },
  ctaProjects: { en: 'See projects', sk: 'Pozri projekty' },
  ctaCv: { en: 'Download CV', sk: 'Stiahnuť CV' },
  meta: [
    { key: { en: 'Based in', sk: 'Miesto' }, val: { en: 'Bratislava, SK', sk: 'Bratislava, SK' } },
    {
      key: { en: 'Studying', sk: 'Štúdium' },
      val: { en: 'Robotics & Cybernetics · STU FEI', sk: 'Robotika a Kybernetika · STU FEI' },
    },
    { key: { en: 'Focus', sk: 'Zameranie' }, val: { en: 'Embedded · 3D · IoT', sk: 'Embedded · 3D · IoT' } },
    { key: { en: 'Status', sk: 'Stav' }, val: { en: 'v4.0 · online', sk: 'v4.0 · online' } },
  ],
}

export const about = {
  eyebrow: { en: 'About me', sk: 'O mne' },
  title: { en: 'Built on ', sk: 'Postavené na ' },
  titleEm: { en: 'curiosity.', sk: 'zvedavosti.' },
  lead: {
    en: "Every project is an opportunity to learn something new and combine logic with creativity. It's not just about code or mechanisms — it's about meaningful solutions that bring joy through discovery.",
    sk: 'Každý projekt je príležitosť naučiť sa niečo nové a spojiť logiku s kreativitou. Nie je to len o kóde alebo mechanizmoch — ide o riešenia, ktoré majú zmysel a prinášajú radosť z objavovania.',
  },
  cards: [
    {
      id: 'hobbies',
      title: { en: 'Hobbies', sk: 'Záľuby' },
      body: {
        en: 'Coding, 3D printing, hacking on Arduino & ESP32, retrofuturism-inspired art, and robotics projects that push my skills further. I love experimenting and learning from every attempt — successful or not.',
        sk: 'Programovanie, 3D tlač, experimenty s Arduino a ESP32, retrofuturistické umenie a robotické projekty, ktoré ma posúvajú ďalej. Rád skúšam nové prístupy a učím sa z každého pokusu — úspešného aj neúspešného.',
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
    interests: { en: 'Interests', sk: 'Záujmy' },
  },

  education: [
    {
      role: { en: 'Robotics & Cybernetics — Bachelor', sk: 'Robotika a Kybernetika — Bakalár' },
      place: {
        en: 'Faculty of Electrical Engineering and Informatics, STU Bratislava',
        sk: 'Fakulta elektrotechniky a informatiky, STU Bratislava',
      },
      when: { en: 'Sep 2023 — present', sk: 'Sep 2023 — doteraz' },
    },
    {
      role: { en: 'Grammar School', sk: 'Gymnázium' },
      place: { en: 'Ružomberok, Slovakia', sk: 'Ružomberok, Slovensko' },
      when: { en: 'Sep 2019 — Jun 2023', sk: 'Sep 2019 — Jún 2023' },
    },
  ],

  skills: [
    { name: 'C', level: 90, tag: { en: 'Advanced', sk: 'Pokročilý' } },
    { name: 'Java', level: 70, tag: { en: 'Intermediate', sk: 'Mierne pokročilý' } },
    { name: 'Python', level: 70, tag: { en: 'Intermediate', sk: 'Mierne pokročilý' } },
    { name: 'HTML / CSS', level: 70, tag: { en: 'Intermediate', sk: 'Mierne pokročilý' } },
  ],

  languages: [
    { name: { en: 'Slovak', sk: 'Slovenčina' }, level: { en: 'Native', sk: 'Rodný' } },
    { name: { en: 'English', sk: 'Angličtina' }, level: { en: 'B2 · Upper-Intermediate', sk: 'B2 · Stredne pokročilý' } },
    { name: { en: 'French', sk: 'Francúzština' }, level: { en: 'A2 · Elementary', sk: 'A2 · Základy' } },
  ],

  interests: [
    {
      en: 'Microcontrollers (Arduino, Raspberry Pi) and robotic prototypes',
      sk: 'Mikrokontroléry (Arduino, Raspberry Pi) a robotické prototypy',
    },
    { en: '3D modeling and printing for functional devices', sk: '3D modelovanie a tlač funkčných zariadení' },
    {
      en: 'Robotics and automation with a focus on innovation',
      sk: 'Robotika a automatizácia s dôrazom na inovácie',
    },
    { en: 'Cycling, hiking, exploring new places', sk: 'Cyklistika, turistika, objavovanie nových miest' },
  ],
}

export const timetable = {
  eyebrow: { en: 'Current semester', sk: 'Aktuálny semester' },
  title: { en: 'My ', sk: 'Môj ' },
  titleEm: { en: 'timetable.', sk: 'rozvrh.' },
  legend: {
    lecture: { en: 'Lecture', sk: 'Prednáška' },
    lab: { en: 'Lab / Seminar', sk: 'Laboratórium / Cvičenie' },
  },
  days: [
    {
      day: { en: 'Monday', sk: 'Pondelok' },
      slots: [
        {
          time: '07:00 — 08:50',
          lab: true,
          name: { en: 'Physical Education 6', sk: 'Telesná kultúra 6' },
          who: 'V. Pajkoš · POML',
        },
        {
          time: '10:00 — 11:50',
          name: { en: 'Continuous Processes', sk: 'Spojité procesy' },
          who: 'E. Miklovičová · ab150',
        },
        {
          time: '13:00 — 14:50',
          name: { en: 'Industrial IoT', sk: 'Priemyselný IoT' },
          who: 'L. Mrafko · bc300',
        },
      ],
    },
    {
      day: { en: 'Tuesday', sk: 'Utorok' },
      slots: [
        {
          time: '10:00 — 11:50',
          name: { en: 'Artificial Intelligence', sk: 'Umelá inteligencia' },
          who: 'I. Sekaj · cd300',
        },
        {
          time: '13:00 — 14:50',
          lab: true,
          name: { en: 'Industrial IoT', sk: 'Priemyselný IoT' },
          who: 'L. Mrafko · d328',
        },
        {
          time: '15:00 — 16:50',
          lab: true,
          name: { en: 'Robotic Manipulators Control', sk: 'Riadenie rob. manipulátorov' },
          who: 'J. Ivan · d619',
        },
      ],
    },
    {
      day: { en: 'Wednesday', sk: 'Streda' },
      slots: [
        {
          time: '10:00 — 11:50',
          lab: true,
          name: { en: 'Continuous Processes', sk: 'Spojité procesy' },
          who: 'E. Miklovičová · d301',
        },
        {
          time: '13:00 — 14:50',
          lab: true,
          name: { en: 'Artificial Intelligence', sk: 'Umelá inteligencia' },
          who: 'T. Lizák · d713',
        },
      ],
    },
    {
      day: { en: 'Thursday', sk: 'Štvrtok' },
      slots: [
        {
          time: '10:00 — 11:50',
          name: { en: 'Robotic Manipulators Control', sk: 'Riadenie rob. manipulátorov' },
          who: 'A. Babinec · cd150',
        },
      ],
    },
  ],
}

export const projects = {
  eyebrow: { en: 'Selected work', sk: 'Vybrané projekty' },
  title: { en: 'Recent ', sk: 'Posledné ' },
  titleEm: { en: 'projects.', sk: 'projekty.' },
  open: { en: 'PRESS <ENTER> TO OPEN', sk: 'STLAČ <ENTER> PRE OTVORENIE' },
  items: [
    {
      num: '01',
      tag: 'Python · Desktop · Gmail API',
      title: { en: 'BeanyBox', sk: 'BeanyBox' },
      url: 'https://github.com/Greenythebeany/BeanyBox',
      desc: {
        en: 'A terminal-styled desktop mail client for Gmail. Threads, labels and search rendered as a green-on-black console instead of yet another web view.',
        sk: 'Desktopový mailový klient pre Gmail v štýle terminálu. Vlákna, štítky a vyhľadávanie vykreslené ako zelená konzola namiesto ďalšieho webového okna.',
      },
    },
    {
      num: '02',
      tag: 'Python · Storage · Discord API',
      title: { en: 'BeanyDrive', sk: 'BeanyDrive' },
      url: 'https://github.com/Greenythebeany/BeanyDrive',
      desc: {
        en: 'Turns a Discord channel into a personal cloud drive. Chunks files, uploads them as attachments, and rebuilds them on the way back down.',
        sk: 'Premení Discord kanál na osobné cloudové úložisko. Rozdelí súbory na časti, nahrá ich ako prílohy a pri sťahovaní ich zase poskladá.',
      },
    },
    {
      num: '03',
      tag: 'Python · TUI · Discord API',
      title: { en: "Beany's Quest Maker", sk: "Beany's Quest Maker" },
      url: 'https://github.com/Greenythebeany/Beany-s-Discord-Quest-Maker',
      desc: {
        en: "A TUI app that clears Discord's Orb quests for games you do not own. Spoofs the play session, watches the progress endpoint, claims the reward.",
        sk: 'TUI aplikácia, ktorá splní Discord Orb questy aj pre hry, ktoré nevlastníš. Odsimuluje hernú reláciu, sleduje progres a vyzdvihne odmenu.',
      },
    },
    {
      num: '04',
      tag: 'Chrome Ext · CSS',
      title: { en: 'BetterAIS', sk: 'BetterAIS' },
      url: 'https://github.com/Greenythebeany/BetterAis',
      desc: {
        en: 'A Chrome extension that visually overhauls is.stuba.sk — modern typography, cleaner layout and a calmer UI for the daily AIS grind.',
        sk: 'Chrome rozšírenie, ktoré vizuálne prerába is.stuba.sk — moderná typografia, čistejší layout a pokojnejšie UI pre každodenný AIS.',
      },
    },
    {
      num: '05',
      tag: 'Web · Drag & Drop',
      title: { en: 'FEI STU Timetable', sk: 'Rozvrh FEI STU' },
      url: 'https://github.com/Greenythebeany/timetable',
      desc: {
        en: 'Interactive timetable for FEI STU students — import the Excel export from AIS, drag & drop seminars into chosen slots, then export the finished schedule as PDF.',
        sk: 'Interaktívny rozvrh pre študentov FEI STU — naimportuj Excel export z AISu, drag & drop cvičení do zvolených termínov a hotový rozvrh exportuj do PDF.',
      },
    },
  ],
}

export const footer = {
  halted: { en: 'Thanks for stopping by — system halted', sk: 'Vďaka za návštevu — systém zastavený' },
  cvLink: { en: 'CV', sk: 'CV' },
}
