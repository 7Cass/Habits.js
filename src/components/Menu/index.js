import { SectionMenu, MenuItem } from "./styles";

import { useHistory } from "react-router-dom";

const Menu = () => {
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    history.push("/");
  };

  return (
    <SectionMenu>
      <MenuItem onClick={() => history.push("/homepage")}>
        <i class="fas fa-home"></i>
        Início
      </MenuItem>
      <MenuItem onClick={() => history.push("/groups")}>Grupos</MenuItem>
      <MenuItem onClick={() => history.push("/users")}>Usuarios</MenuItem>
      <MenuItem onClick={logout}>
        Sair
        <i class="fas fa-sign-out-alt"></i>
      </MenuItem>
    </SectionMenu>
  );
};

export default Menu;
