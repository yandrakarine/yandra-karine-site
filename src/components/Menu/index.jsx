import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuItem, MenuList } from './style';
import { useLocation, useNavigate } from 'react-router-dom';

export const Menu = ({ menuItemsList }) => {
  const navigation = useNavigate();
  const { pathname: currentRoute } = useLocation();
  console.log(currentRoute);

  return (
    <MenuList>
      {menuItemsList.map(({ itemIcon, itemRoute, itemTitle }) => (
        <MenuItem key={Math.random()} onClick={() => navigation(itemRoute)}>
          <FontAwesomeIcon
            icon={itemIcon}
            style={{ color: 'white' }}
            size='xl'
            transform={currentRoute === itemRoute ? 'grow-3' : ''}
            cursor='pointer'
            title={itemTitle}
            opacity={currentRoute !== itemRoute ? 0.4 : 100}
          />
        </MenuItem>
      ))}
    </MenuList>
  );
};
