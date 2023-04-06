import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuItem, MenuList } from "./style";

export const Menu = ({ menuItemsList }) => {
  console.log("🚀 ~~ menuItemsList", menuItemsList);
  return (
    <MenuList>
      {menuItemsList.map(({ itemIcon, itemRoute, itemTitle }) => (
        <MenuItem key={Math.random()}>
          <FontAwesomeIcon
            icon={itemIcon}
            style={{ color: "white" }} // aqui vai mudar de acordo com o theme(ligth:dark)
            size="xl"
          />
        </MenuItem>
      ))}
    </MenuList>
  );
};
