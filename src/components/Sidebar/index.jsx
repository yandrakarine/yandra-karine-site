import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu } from '../Menu/index';
import { Contacts, RoutesENUM } from '../../constants';
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
        <MyAvatar />
        <MyName children='Yandra Karine' />
        <MyOccupation children='Fluffy-stuff Developer' />
      </Profile>
      <Menu menuItemsList={items} />
      <BottomContainer>
        <ContactRow>
          <LinkContainer href={LINKEDIN_URL}>
            <FontAwesomeIcon
              icon='fa-brands fa-linkedin'
              style={{ color: 'white' }} // aqui vai mudar de acordo com o theme(ligth:dark)
              size='xl'
              cursor='pointer'
              title='Linkedin'
            />
          </LinkContainer>
          <LinkContainer href={GITHUB_URL}>
            <FontAwesomeIcon
              icon='fa-brands fa-github'
              style={{ color: 'white' }} // aqui vai mudar de acordo com o theme(ligth:dark)
              size='xl'
              cursor='pointer'
              title='Github'
            />
          </LinkContainer>
        </ContactRow>
      </BottomContainer>
    </Wrapper>
  );
};
