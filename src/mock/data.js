import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Rodrigo Bernardi', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: "Hi. I'm Rodrigo and welcome to my website", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Rodrigo Bernardi',
  subtitle: "and I'm a Backend Developer",
  cta: 'About me',
  // title: '',
  // name: '',
  // subtitle: '',
  // cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Graduated in Computer Science from the University of São Paulo - Brazil, Rodrigo is passionate about computers and has great interest in emerging technologies.',
  paragraphTwo:
    'Has participated in projects involving Blockchains, embedded systems and cybersecurity research. Currently works as a developer of embedded systems for cryptografy and make WebApps on demand.',
  paragraphThree: '“The science of today is the technology of tomorrow.” – Edward Teller',
  resume: 'https://drive.google.com/file/d/1Zi_1m_ZyNHhOIt6_tXmBvfZUomXIXUGz/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Click here and',
  btn: "let's talk about code!",
  email: 'rodrigo.n.bernardi@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/rhobernardi',
    },
    {
      id: nanoid(),
      name: 'telegram',
      url: 'https://t.me/rhobernardi',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/rodrigobernardi07/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
