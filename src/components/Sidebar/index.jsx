import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "../Menu/index";
import {
  Wrapper,
  Profile,
  MyAvatar,
  MyName,
  MyOccupation,
  BottomContainer,
  ContactRow,
} from "./style";

export const Sidebar = () => {
  const items = [
    {
      itemIcon: "fa-solid fa-house",
      itemRoute: "RoutesENUM.HOME",
      itemTitle: "home",
    },
    {
      itemIcon: "fa-solid fa-briefcase",
      itemRoute: "RoutesENUM.EXPERIENCE",
      itemTitle: "experiences",
    },
    {
      itemIcon: "fa-solid fa-laptop-code",
      itemRoute: "RoutesENUM.CODE_SKILLS",
      itemTitle: "skills",
    },
  ];
  return (
    <Wrapper>
      <Profile>
        <MyAvatar />
        <MyName children="Yandra Karine" />
        <MyOccupation children="Fluffy-stuff Developer" />
      </Profile>
      <Menu menuItemsList={items} />
      <BottomContainer>
        <ContactRow>
          {/* depois é preciso colocar os links */}
          <FontAwesomeIcon
            icon="fa-brands fa-linkedin"
            style={{ color: "white" }} // aqui vai mudar de acordo com o theme(ligth:dark)
            size="xl"
          />
          <FontAwesomeIcon
            icon="fa-brands fa-github"
            style={{ color: "white" }} // aqui vai mudar de acordo com o theme(ligth:dark)
            size="xl"
          />
        </ContactRow>
      </BottomContainer>
    </Wrapper>
  );
};
