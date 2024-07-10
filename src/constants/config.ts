type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: 'Guibe Arnaud — Portfolio',
    fullName: 'Arnaud Guibe',
    email: 'guibe310@gmail.com',
  },
  hero: {
    name: 'Arnaud Guibe',
    p: ['Je développe des interfaces utilisateurs', 'des applications web et web mobiles.'],
  },
  contact: {
    p: 'Contactez-moi',
    h2: 'Contact.',
    form: {
      name: {
        span: 'ton nom',
        placeholder: 'Quel est ton nom?',
      },
      email: { span: 'ton email', placeholder: 'Quel est ton email?' },
      message: {
        span: 'ton message',
        placeholder: 'Que veut tu dire?',
      },
    },
  },
  sections: {
    about: {
      p: 'Introduction',
      h2: 'Résumé.',
      content: `Je suis un développeur de logiciels qualifié avec une expérience en
      JavaScript, et une expertise dans des frameworks comme React et Node.js.
      J'apprent vite et collabore étroitement avec les clients pour
      créer des solutions efficaces, évolutives et conviviales qui résolvent
      problèmes réels. Travaillons ensemble pour donner vie à vos idées!!`,
    },
    experience: {
      p: 'Mon parcour',
      h2: 'Experience.',
    },
    feedbacks: {
      p: 'Vos commentaires',
      h2: 'Témoignages.',
    },
    works: {
      p: 'Mon travail',
      h2: 'Projets.',
      content: `Les projets suivants mettent en valeur mes compétences et mon expérience à travers
    des exemples concrets de mon travail. Chaque projet est brièvement décrit avec un
    lien vers des dépôts de code. Il reflète ma capacité à résoudre des problèmes complexes, à travailler avec différentes technologies,
    et gérer efficacement les projets.`,
    },
  },
};
