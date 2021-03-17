import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isChecked, setIsChecked] = useState(true);
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState({});
  const [habits, setHabits] = useState([]);
  const [isAuth, setIsAuth] = useState(false);

  const checkAuth = () => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");

    if (token) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  };

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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useChecked = () => useContext(UserContext);
