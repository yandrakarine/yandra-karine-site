import { i18n } from '../../translate/i18n';
import { Idiom, i18nKeys } from '../../constants';
import brazilIcon from '../../assets/icons/brazil.svg';
import usaIcon from '../../assets/icons/united-states.svg';
import { CountryFlagSettings, SettingContainer, SettingsTitle, ToolsTitle, Wrapper } from './style';
import { TranslateRow } from '../../components/Sidebar/style';

const { settingsPage } = i18nKeys;

export const Settigs = () => {
  const { enKey, ptKey, storageKey } = Idiom;

  const changeIdiom = ({ newIdiomKey }) => {
    const currentIdiomKey = localStorage.getItem(`${storageKey}`);
    if (currentIdiomKey !== newIdiomKey) {
      localStorage.setItem(`${storageKey}`, newIdiomKey);
      window.location = window.location;
    }
  };
  return (
    <Wrapper>
      <SettingsTitle children={i18n.t(settingsPage.settingsPageTitle)} />
      <SettingContainer>
        <ToolsTitle children={i18n.t(settingsPage.idiom)} />
        <TranslateRow>
          <CountryFlagSettings
            src={brazilIcon}
            title={i18n.t(settingsPage.portuguese)}
            onClick={() => changeIdiom({ newIdiomKey: ptKey })}
          />
          <CountryFlagSettings
            src={usaIcon}
            title={i18n.t(settingsPage.english)}
            onClick={() => changeIdiom({ newIdiomKey: enKey })}
          />
        </TranslateRow>
      </SettingContainer>
    </Wrapper>
  );
};
