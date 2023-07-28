import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu } from '../Menu/index';
import { Contacts, Idiom, RoutesENUM } from '../../constants';
import {
  Wrapper,
  Profile,
  MyAvatar,
  MyName,
  MyOccupation,
  BottomContainer,
  ContactRow,
  TranslateRow,
  CountryFlag,
  SettingsIcon,
} from './style';
import brazilIcon from '../../assets/icons/brazil.svg';
import usaIcon from '../../assets/icons/united-states.svg';
import { LinkContainer } from '../common';
import { i18n } from '../../translate/i18n';
import { i18nKeys } from '../../constants';
import { Link, useLocation } from 'react-router-dom';

const { profileContent, homeApresentation, settingsPage } = i18nKeys;

export const Sidebar = () => {
  const noMobile = window.innerWidth > 438;
  const { enKey, ptKey, storageKey } = Idiom;
  const { pathname: currentRoute } = useLocation();

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

  const changeIdiom = ({ newIdiomKey }) => {
    const currentIdiomKey = localStorage.getItem(`${storageKey}`);
    if (currentIdiomKey !== newIdiomKey) {
      localStorage.setItem(`${storageKey}`, newIdiomKey);
      window.location = window.location;
    }
  };

  return (
    <Wrapper>
      <Profile>
        <MyAvatar avatarImage={i18n.t(homeApresentation.myAvatarImage)} />
        <MyName children={i18n.t(profileContent.myName)} />
        <MyOccupation children={i18n.t(profileContent.myJobDescription)} />
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
          <TranslateRow>
            <CountryFlag
              src={brazilIcon}
              title={i18n.t(settingsPage.portuguese)}
              onClick={() => changeIdiom({ newIdiomKey: ptKey })}
            />
            <CountryFlag
              src={usaIcon}
              title={i18n.t(settingsPage.english)}
              onClick={() => changeIdiom({ newIdiomKey: enKey })}
            />
          </TranslateRow>
        </BottomContainer>
      ) : (
        <Link to={RoutesENUM.SETTINGS}>
          <SettingsIcon>
            <FontAwesomeIcon
              icon='fa-solid fa-gear'
              style={{ color: 'white' }}
              size='xl'
              cursor='pointer'
              title='settings'
              opacity={currentRoute !== '/settings' ? 0.4 : 100}
            />
          </SettingsIcon>
        </Link>
      )}
    </Wrapper>
  );
};
