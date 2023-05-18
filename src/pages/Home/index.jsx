import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Contacts, homeApresentation, skills } from '../../constants';
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

export const HomePage = () => {
  const isMobile = window.innerWidth < 438;
  const { LINKEDIN_URL, GITHUB_URL } = Contacts;

  return (
    <Wrapper>
      <Welcome children={homeApresentation.welcomeText} />
      <HomeAvatar avatarImage={homeApresentation.myAvatarImage} />
      <PageContent>
        <MyName children={homeApresentation.myName} />
        <MyDescriptionJob children={homeApresentation.myJobDescription} />
        <HomeToolsAndLAnguagesRow>
          {skills.map(({ skill, icon, color }) => (
            <FontAwesomeIcon icon={icon} style={{ color: color }} size='2x' title={skill} />
          ))}
        </HomeToolsAndLAnguagesRow>
        <AboutMeTitle children={homeApresentation.aboutMeTitle} />
        <MySumary children={homeApresentation.aboutMeSummary} />
        {isMobile ? (
          <ContactContainer>
            <ContactTitle children='Perfis' />
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
