import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

import {
  // mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  threejs,
  WildCodeSchool,
  moovieslib,
  portfolio,
  TodoList,
  // redux,
  // mongodb,
  // docker,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  // carrent,
  // jobit,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'A Propos',
  },
  {
    id: 'work',
    title: 'Experience',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Web Developer',
    icon: web,
  },

  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Créateur',
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },

  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },

  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences: TExperience[] = [
  {
    title: 'HTML & CSS Developer',
    companyName: 'WildCodeSchool',
    icon: WildCodeSchool,
    iconBg: '#383E56',
    date: 'Février 2024 - Mars 2024',
    points: [
      "Développement et maintenance d'applications web utilisant HTML, CSS et technologies associées.",
      'Mise en œuvre de designs responsives et assurance de la compatibilité inter-navigateurs en utilisant HTML et CSS.',
      'Participation aux revues de code et fourniture de retours constructifs aux autres développeurs.',
    ],
  },
  {
    title: 'js et node.js',
    companyName: 'WildCodeSchool',
    icon: WildCodeSchool,
    iconBg: '#E6DEDD',
    date: 'Mars 2024 - Avril 2024',
    points: [
      "Développement d'application animer et dynamique pour améliorer l'éxpérience utilisateur.",
      "Développement d'API utilisant Node.js et Express.js.",
    ],
  },
  {
    title: 'React et React Native',
    companyName: 'WildCodeSchool',
    icon: WildCodeSchool,
    iconBg: '#383E56',
    date: 'Avril 2024 - juin 2024',
    points: [
      'Développer et maintenir des applications web en utilisant React.js et d’autres technologies.',
      "Développement d'application en utilisant les hook et ustates.",
      "Développement d'application en utilisant la méthode fetch.",
    ],
  },
  {
    title: 'SQL et React',
    companyName: 'WildCodeSchool',
    icon: WildCodeSchool,
    iconBg: '#E6DEDD',
    date: 'juin 2024 - Present',
    points: [
      'Développement de base de données et modélisation avec MYSQL',
      "Développement d'une application avec backend en intégrant les bases de données",
      "Développement d'application avec un système d'autentification",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      'Je pensais qu’il était impossible de faire un site aussi beau que notre produit, mais Arnaud m’a prouvé le contraire.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      'J’ai jamais rencontré un développeur web qui se soucie vraiment du succès de ses clients comme Arnaud.',
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial: 'Arnaud a optimisé notre site Web. Nous ne les remercierons jamais assez!',
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects: TProject[] = [
  {
    name: 'moovies lib',
    description:
      "Découvrez sur notre site les dernières sorties cinématographiques. Plongez dans l'univers du cinéma avec le descriptif cinéma, acteur et des recommandations personnalisées.",
    tags: [
      {
        name: 'REACT',
        color: 'blue-text-gradient',
      },
      {
        name: 'JS',
        color: 'green-text-gradient',
      },
      {
        name: 'SCSS',
        color: 'pink-text-gradient',
      },
    ],
    image: moovieslib,
    sourceCodeLink: 'https://github.com/magicbob31/moovies_lib',
  },
  {
    name: 'Portfolio 2D',
    description:
      'Explorez mon portfolio 2D où vous trouverez un morceaux de moi des animations. Découvrez mon style unique et mon expertise à travers des œuvres originales et créatives.',
    tags: [
      {
        name: 'JS',
        color: 'blue-text-gradient',
      },
      {
        name: 'REACT',
        color: 'green-text-gradient',
      },
      {
        name: 'CSS',
        color: 'pink-text-gradient',
      },
    ],
    image: portfolio,
    sourceCodeLink: 'https://github.com/magicbob31/portfolio',
  },
  {
    name: 'TODO LISTE',
    description:
      'Egalement appelée liste de tâches, est un outil simple et efficace pour gérer les tâches d’un projet. Elle peut contenir des tâches indépendantes ou des actions à accomplir.',
    tags: [
      {
        name: 'JS',
        color: 'blue-text-gradient',
      },
      {
        name: 'REACT',
        color: 'green-text-gradient',
      },
      {
        name: 'CSS',
        color: 'pink-text-gradient',
      },
    ],
    image: TodoList,
    sourceCodeLink: 'https://github.com/magicbob31/TodoListe',
  },
];

export { services, technologies, experiences, testimonials, projects };
