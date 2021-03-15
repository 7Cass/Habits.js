import { SectionMenu, MenuItem } from "./styles";

const Menu = () => {
  return (
    <SectionMenu>
      <MenuItem>
        <i class="fas fa-home"></i>
        Home
      </MenuItem>
      <MenuItem>Groups</MenuItem>
      <MenuItem>
        Exit
        <i class="fas fa-sign-out-alt"></i>
      </MenuItem>
    </SectionMenu>
  );
};

export default Menu;
