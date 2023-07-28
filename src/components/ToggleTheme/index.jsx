import Switch from 'react-switch';
import moonIcon from '../../assets/icons/moon.svg';
import sunIcon from '../../assets/icons/sun.svg';
import { FixIcons, ThemeIcon } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from '../../context/theme';
import theme from '../../styles/themes';

export const ToggleTheme = () => {
  const { changeTheme, activeTheme } = useTheme();
  const { toggleColors } = theme;

  const newTheme = activeTheme === 'light' ? 'dark' : 'light';

  return (
    <Switch
      onChange={() => changeTheme(newTheme)}
      checked={activeTheme === 'light'}
      onColor={`${toggleColors.onColor}`}
      offColor={`${toggleColors.offColor}`}
      onHandleColor={`${toggleColors.onHandleColor}`}
      offHandleColor={`${toggleColors.offHandleColor}`}
      checkedIcon={
        <FixIcons>
          <FontAwesomeIcon
            icon='fa-solid fa-sun'
            style={{ color: 'yellow' }}
            size='xl'
            cursor='pointer'
            title='Light'
          />
        </FixIcons>
      }
      uncheckedIcon={
        <FixIcons>
          <FontAwesomeIcon
            icon='fa-solid fa-moon'
            style={{ color: '#e6edf3' }}
            size='xl'
            cursor='pointer'
            title='Dark'
          />
        </FixIcons>
      }
    />
  );
};
