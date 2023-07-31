import en from '../data/en.json';

const {
  profileContent,
  homeApresentation,
  projectsList,
  jobs,
  experiencesPageTitle,
  codeSkillsPageTitle,
  contactRowTitle,
  language,
  settingsPage,
} = en;

export const enTextContent = {
  en: {
    translations: {
      experiencesPageTitle: experiencesPageTitle,
      codeSkillsPageTitle: codeSkillsPageTitle,
      contactRowTitle: contactRowTitle,
      language: language,
      settingsPage: {
        settingsPageTitle: settingsPage.settingsPageTitle,
        idiom: settingsPage.idiom,
        portuguese: settingsPage.portuguese,
        english: settingsPage.english,
        theme: settingsPage.theme,
      },
      profileContent: {
        myName: profileContent.myName,
        myJobDescription: profileContent.myJobDescription,
      },
      homeApresentation: {
        welcomeText: homeApresentation.welcomeText,
        myName: homeApresentation.myName,
        myJobDescription: homeApresentation.myJobDescription,
        aboutMeTitle: homeApresentation.aboutMeTitle,
        aboutMeSummary: homeApresentation.aboutMeSummary,
      },
      projectsList: [
        {
          projectTitle: projectsList[0].projectTitle,
          projectImage: projectsList[0].projectImage,
          projectSummary: projectsList[0].projectSummary,
          repoLink: projectsList[0].repoLink,
        },
        {
          projectTitle: projectsList[1].projectTitle,
          projectImage: projectsList[1].projectImage,
          projectSummary: projectsList[1].projectSummary,
          repoLink: projectsList[1].repoLink,
        },
        {
          projectTitle: projectsList[2].projectTitle,
          projectImage: projectsList[2].projectImage,
          projectSummary: projectsList[2].projectSummary,
          repoLink: projectsList[2].repoLink,
        },
        {
          projectTitle: projectsList[3].projectTitle,
          projectImage: projectsList[3].projectImage,
          projectSummary: projectsList[3].projectSummary,
          repoLink: projectsList[3].repoLink,
        },
        {
          projectTitle: projectsList[4].projectTitle,
          projectImage: projectsList[4].projectImage,
          projectSummary: projectsList[4].projectSummary,
          repoLink: projectsList[4].repoLink,
        },
      ],
      jobs: [
        {
          title: jobs[0].title,
          resume: jobs[0].resume,
          job_responsabilities: [
            {
              title: jobs[0].job_responsabilities[0].title,
              summary: jobs[0].job_responsabilities[0].summary,
              icon: jobs[0].job_responsabilities[0].icon,
            },
            {
              title: jobs[0].job_responsabilities[1].title,
              summary: jobs[0].job_responsabilities[1].summary,
              icon: jobs[0].job_responsabilities[1].icon,
            },
          ],
        },
        {
          title: jobs[1].title,
          resume: jobs[1].resume,
          job_responsabilities: [
            {
              title: jobs[1].job_responsabilities[0].title,
              summary: jobs[1].job_responsabilities[0].summary,
              icon: jobs[1].job_responsabilities[0].icon,
            },
            {
              title: jobs[1].job_responsabilities[1].title,
              summary: jobs[1].job_responsabilities[1].summary,
              icon: jobs[1].job_responsabilities[1].icon,
            },
          ],
        },
      ],
    },
  },
};
