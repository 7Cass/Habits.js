// react
import { createContext, useContext, useState, useEffect } from "react";

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
    () => localStorage.getItem("token") || sessionStorage.getItem("token")
  );

  const checkAuth = () => {
    token ? setIsAuth(true) : setIsAuth(false);
  };

  const getUserData = () => {
    if (token) {
      setUser(JSON.parse(localStorage.getItem("user")));
      setHabits(JSON.parse(localStorage.getItem("habits")));
      setGroup(JSON.parse(localStorage.getItem("userGroup")));
    } else {
      setUser(JSON.parse(sessionStorage.getItem("user")));
      setHabits(JSON.parse(sessionStorage.getItem("habits")));
      setGroup(JSON.parse(sessionStorage.getItem("userGroup")));
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
