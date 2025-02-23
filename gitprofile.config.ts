// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ilhmshfz', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['ilhmshfz/psm_utmccos', 'ilhmshfz/myfinancenote'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'UTMCCOS',
          description:
            'UTM Care Charity Online Shop (UTMCCOS) is a final year project to replace the current system used by UTM students...',
          imageUrl:
            'https://i.ibb.co/TDfMkXQk/utmccoslogo.png',
          link: 'https://drive.google.com/file/d/1nnPlafJGWp9PiT7X6FryBI18I-80Aq3o/view?usp=sharing',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ilham Shahfilzuah',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'ilhmshfz',
    twitter: 'ilhmshfz',
    //mastodon: 'arifszn@mastodon.social',
    //researchGate: '',
    //facebook: '',
    //instagram: '',
    //reddit: '',
    //threads: '',
    //youtube: '', // example: 'pewdiepie'
    //udemy: '',
    //dribbble: '',
    //behance: '',
    //medium: 'arifszn',
    //dev: 'ilhmshfz',
    //stackoverflow: '', // example: '1/jeff-atwood'
    //skype: '',
    telegram: 'ilhmshfz',
    //website: 'https://www.arifszn.com',
    //phone: '',
    email: 'ilhmshfz@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/drive/folders/1-Jg5DkZSQVEkMvKuPGfpAWufDDxpbcEV?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JAVA',
    'Laravel',
    'JavaScript',
    'Flutter Dart',
    'Node.js',
    'MySQL',
    'Git',
    'Docker',
    'PHP',
    'CSS',
    'HTML',
    'Tailwind',
    'Firebase',
    'Postman',
    'Microsoft Power BI',
    'Tableau',
    'Microsoft Office',
    'Selenium',
  ],
  experiences: [
    {
      company: 'MINDATECH SOLUTION Sdn Bhd',
      position: 'Mobile App Dev Intern',
      from: 'September 2023',
      to: 'February 2024',
      // companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Google AI',
      body: 'Google AI and Prompting Essentials',
      year: 'February 2025',
      link: 'https://drive.google.com/file/d/1cUE2Mp9QNWR0rlF5oDEnW8DZ-PCkGzV6/view?usp=sharing',
    },
    {
      name: 'Power BI',
      body: 'Microsoft Power BI Data Analysis',
      year: 'January 2025',
      link: 'https://drive.google.com/file/d/1dHr-NCHo4pn6CQTb4BokvdR19sov5TnL/view?usp=sharing',
    },
  ],
  educations: [
    {
      institution: 'Universiti Teknologi Malaysia (UTM)',
      degree: 'Bachelor of Computer Science (Software Engineering) with Honours',
      from: 'Graduated',
      to: '2024',
    },
    // {
    //   institution: 'Institution Name',
    //   degree: 'Degree',
    //   from: '2012',
    //   to: '2014',
    // },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: '', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  // googleAnalytics: {
  //   id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  // },
  // // Track visitor interaction and behavior. https://www.hotjar.com
  // hotjar: {
  //   id: '',
  //   snippetVersion: 6,
  // },
  themeConfig: {
    defaultTheme: 'corporate',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
