// react
import { createContext, useContext, useState, useEffect } from "react";

// API
import API from "../../services/index.js";

// helpers
import { getOneUser } from "../../helper/users";
import { getOneGroup } from "../../helper/groups";
import { getPersonalHabit } from "../../helper/habits";

// JWT Decode
import jwt_decode from "jwt-decode";

// ------------------------------------------------

const UserContext = createContext();

// ------------------------------------------------
export const UserProvider = ({ children }) => {
  const [isChecked, setIsChecked] = useState(true);
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState({});
  const [group, setGroup] = useState(null);
  const [habits, setHabits] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(
    () =>
      JSON.parse(localStorage.getItem("token")) ||
      JSON.parse(sessionStorage.getItem("token"))
  );

  const checkAuth = () => {
    token ? setIsAuth(true) : setIsAuth(false);
  };

  const getUserData = async () => {
    if (token) {
      console.log("token do storage: ", token);
      setToken(token);

      const { user_id } = jwt_decode(token);

      const takeUser = await API.get(getOneUser(user_id));
      setUser(takeUser.data);
      console.log("Dados do usuário: ", takeUser.data);

      const takeHabits = await API.get(getPersonalHabit(), {
        headers: { Authorization: `Bearer ${token}` },
      });
      takeHabits.data.sort((a, b) => a.id - b.id);
      setHabits(takeHabits.data);
      console.log("Dados dos hábitos: ", takeHabits.data);

      if (takeUser.data.group) {
        const takeUserGroup = await API.get(getOneGroup(takeUser.data.group));
        setGroup(takeUserGroup.data);
        console.log("Dados do grupo: ", takeUserGroup.data);
      }
    }
  };

  useEffect(() => {
    getUserData();
    // eslint-disable-next-line
  }, []);

  return (
    <UserContext.Provider
      value={{
        isChecked,
        userId,
        isAuth,
        setIsChecked,
        setUserId,
        checkAuth,
        user,
        setUser,
        habits,
        setHabits,
        group,
        setGroup,
        token,
        setToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useChecked = () => useContext(UserContext);
