import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Contacts, skills } from '../../constants';
import {
  AboutMeTitle,
  ContactContainer,
  ContactLabel,
  ContactRow,
  ContactTitle,
  HomeAvatar,
  HomeToolsAndLAnguagesRow,
  LinkContainer,
  MyDescriptionJob,
  MyName,
  MySumary,
  PageContent,
  Welcome,
  Wrapper,
} from './style';
import { i18n } from '../../translate/i18n';
import { i18nKeys } from '../../constants';

export const HomePage = () => {
  const isMobile = window.innerWidth < 438;
  const { LINKEDIN_URL, GITHUB_URL } = Contacts;

  const { homeApresentation, contactRowTitle } = i18nKeys;

  return (
    <Wrapper>
      <Welcome children={i18n.t(homeApresentation.welcomeText)} />
      <HomeAvatar avatarImage={i18n.t(homeApresentation.myAvatarImage)} />
      <PageContent>
        <MyName children={i18n.t(homeApresentation.myName)} />
        <MyDescriptionJob children={i18n.t(homeApresentation.myJobDescription)} />
        <HomeToolsAndLAnguagesRow>
          {skills.map(({ skill, icon, color }) => (
            <FontAwesomeIcon
              key={Math.random()}
              icon={icon}
              style={{ color: color }}
              size='2x'
              title={skill}
            />
          ))}
        </HomeToolsAndLAnguagesRow>
        <AboutMeTitle children={i18n.t(homeApresentation.aboutMeTitle)} />
        <MySumary children={i18n.t(homeApresentation.aboutMeSummary)} />
        {isMobile ? (
          <ContactContainer>
            <ContactTitle children={i18n.t(contactRowTitle)} />
            <ContactRow>
              <LinkContainer href={LINKEDIN_URL}>
                <FontAwesomeIcon
                  icon='fa-brands fa-linkedin'
                  style={{ color: '#0077b5' }}
                  size='2x'
                  cursor='pointer'
                  title='Linkedin'
                />
                <ContactLabel children='Linkedin' />
              </LinkContainer>
              <LinkContainer href={GITHUB_URL}>
                <FontAwesomeIcon
                  icon='fa-brands fa-github'
                  style={{ color: 'black' }}
                  size='2x'
                  cursor='pointer'
                  title='Github'
                />
                <ContactLabel children='Github' />
              </LinkContainer>
            </ContactRow>
          </ContactContainer>
        ) : (
          ''
        )}
      </PageContent>
    </Wrapper>
  );
};
