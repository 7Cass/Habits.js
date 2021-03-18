// styles
import { SectionMenu, MenuItem } from "./styles";

// react router dom
import { useHistory } from "react-router-dom";

// providers
import { useChecked } from "../../providers/user";

//----------------------------------------------

const Menu = () => {
  const history = useHistory();
  const { setToken, setGroup, setHabits, setUser } = useChecked();

  const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    setToken(null);
    setGroup(null);
    setHabits(null);
    setUser(null);
    history.push("/");
  };

  return (
    <SectionMenu>
      <MenuItem onClick={() => history.push("/homepage")}>
        <i class="fas fa-home" /> Início
      </MenuItem>
      <MenuItem onClick={() => history.push("/groups")}>Grupos</MenuItem>
      <MenuItem onClick={() => history.push("/users")}>Usuarios</MenuItem>
      <MenuItem onClick={logout}>
        Sair <i class="fas fa-sign-out-alt" />
      </MenuItem>
    </SectionMenu>
  );
};

export default Menu;
