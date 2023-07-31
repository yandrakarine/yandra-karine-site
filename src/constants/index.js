import petCareImage from '../assets/images/petCare.png';
import feedbackWidget from '../assets/images/feedbackWidget.png';
import financialControl from '../assets/images/financialControl.png';
import storeInventory from '../assets/images/storeInventory.png';
import pokedex from '../assets/images/pokedex.png';
import avatarYandraProfile from '../assets/images/avatarYandraProfile.png';

export const RoutesENUM = {
  HOME: '/home',
  EXPERIENCE: '/experience',
  CODE_SKILLS: '/code-skills',
  SETTINGS: '/settings',
};

export const Contacts = {
  LINKEDIN_URL: 'https://www.linkedin.com/in/yandra-karine-lima-4183b4143/',
  GITHUB_URL: 'https://github.com/yandrakarine',
};

export const Idiom = {
  storageKey: 'i18nextLng',
  ptKey: 'pt-BR',
  enKey: 'en-US',
};

export const projectsListImages = [
  {
    projectImage: petCareImage,
  },
  {
    projectImage: feedbackWidget,
  },
  {
    projectImage: financialControl,
  },
  {
    projectImage: pokedex,
  },
  {
    projectImage: storeInventory,
  },
];

export const i18nKeys = {
  experiencesPageTitle: 'experiencesPageTitle',
  codeSkillsPageTitle: 'codeSkillsPageTitle',
  contactRowTitle: 'contactRowTitle',
  language: 'language',
  settingsPage: {
    settingsPageTitle: 'settingsPage.settingsPageTitle',
    idiom: 'settingsPage.idiom',
    portuguese: 'settingsPage.portuguese',
    english: 'settingsPage.english',
    theme: 'settingsPage.theme',
  },
  profileContent: {
    myName: 'profileContent.myName',
    myJobDescription: 'profileContent.myJobDescription',
  },
  homeApresentation: {
    welcomeText: 'homeApresentation.welcomeText',
    myName: 'homeApresentation.myName',
    myAvatarImage: avatarYandraProfile,
    myJobDescription: 'homeApresentation.myJobDescription',
    aboutMeTitle: 'homeApresentation.aboutMeTitle',
    aboutMeSummary: 'homeApresentation.aboutMeSummary',
  },
  projectsList: [
    {
      projectTitle: 'projectsList.0.projectTitle',
      projectImage: 'projectsList.0.projectImage',
      projectSummary: 'projectsList.0.projectSummary',
      repoLink: 'projectsList.0.repoLink',
    },
    {
      projectTitle: 'projectsList.1.projectTitle',
      projectImage: 'projectsList.1.projectImage',
      projectSummary: 'projectsList.1.projectSummary',
      repoLink: 'projectsList.1.repoLink',
    },
    {
      projectTitle: 'projectsList.2.projectTitle',
      projectImage: 'projectsList.2.projectImage',
      projectSummary: 'projectsList.2.projectSummary',
      repoLink: 'projectsList.2.repoLink',
    },
    {
      projectTitle: 'projectsList.3.projectTitle',
      projectImage: 'projectsList.3.projectImage',
      projectSummary: 'projectsList.3.projectSummary',
      repoLink: 'projectsList.3.repoLink',
    },
    {
      projectTitle: 'projectsList.4.projectTitle',
      projectImage: 'projectsList.4.projectImage',
      projectSummary: 'projectsList.4.projectSummary',
      repoLink: 'projectsList.4.repoLink',
    },
  ],
  jobs: [
    {
      title: 'jobs.0.title',
      resume: 'jobs.0.resume',
      job_responsabilities: [
        {
          title: 'jobs.0.job_responsabilities.0.title',
          summary: 'jobs.0.job_responsabilities.0.summary',
          icon: 'jobs.0.job_responsabilities.0.icon',
        },
        {
          title: 'jobs.0.job_responsabilities.1.title',
          summary: 'jobs.0.job_responsabilities.1.summary',
          icon: 'jobs.0.job_responsabilities.1.icon',
        },
      ],
    },
    {
      title: 'jobs.1.title',
      resume: 'jobs.1.resume',
      job_responsabilities: [
        {
          title: 'jobs.1.job_responsabilities.0.title',
          summary: 'jobs.1.job_responsabilities.0.summary',
          icon: 'jobs.1.job_responsabilities.0.icon',
        },
        {
          title: 'jobs.1.job_responsabilities.1.title',
          summary: 'jobs.1.job_responsabilities.1.summary',
          icon: 'jobs.1.job_responsabilities.1.icon',
        },
      ],
    },
  ],
};

export const skills = [
  {
    skill: 'HTML5',
    icon: 'fa-brands fa-html5',
    color: '#e96228',
  },
  {
    skill: 'CSS3',
    icon: 'fa-brands fa-css3-alt',
    color: '#00a8d7',
  },
  {
    skill: 'JavaScript',
    icon: 'fa-brands fa-js-square',
    color: '#efd81d',
  },
  {
    skill: 'React.js',
    icon: 'fa-brands fa-react',
    color: '#5ed3f3',
  },
  {
    skill: 'Node.js',
    icon: 'fa-brands fa-node-js',
    color: '#639a58',
  },
];
