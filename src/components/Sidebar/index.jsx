import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu } from '../Menu/index';
import { Contacts, RoutesENUM, homeApresentation, profileContent } from '../../constants';
import {
  Wrapper,
  Profile,
  MyAvatar,
  MyName,
  MyOccupation,
  BottomContainer,
  ContactRow,
} from './style';
import { LinkContainer } from '../common';

export const Sidebar = () => {
  const noMobile = window.innerWidth > 438;

  const items = [
    {
      itemIcon: 'fa-solid fa-house',
      itemRoute: RoutesENUM.HOME,
      itemTitle: 'home',
    },
    {
      itemIcon: 'fa-solid fa-briefcase',
      itemRoute: RoutesENUM.EXPERIENCE,
      itemTitle: 'experiences',
    },
    {
      itemIcon: 'fa-solid fa-laptop-code',
      itemRoute: RoutesENUM.CODE_SKILLS,
      itemTitle: 'skills',
    },
  ];

  const { LINKEDIN_URL, GITHUB_URL } = Contacts;

  return (
    <Wrapper>
      <Profile>
        <MyAvatar avatarImage={homeApresentation.myAvatarImage} />
        <MyName children={profileContent.myName} />
        <MyOccupation children={profileContent.myJobDescription} />
      </Profile>
      <Menu menuItemsList={items} />
      {noMobile ? (
        <BottomContainer>
          <ContactRow>
            <LinkContainer href={LINKEDIN_URL}>
              <FontAwesomeIcon
                icon='fa-brands fa-linkedin'
                style={{ color: 'white' }}
                size='xl'
                cursor='pointer'
                title='Linkedin'
              />
            </LinkContainer>
            <LinkContainer href={GITHUB_URL}>
              <FontAwesomeIcon
                icon='fa-brands fa-github'
                style={{ color: 'white' }}
                size='xl'
                cursor='pointer'
                title='Github'
              />
            </LinkContainer>
          </ContactRow>
        </BottomContainer>
      ) : (
        ''
      )}
    </Wrapper>
  );
};
