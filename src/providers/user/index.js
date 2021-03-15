import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isChecked, setIsChecked] = useState(true);
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider
      value={{ isChecked, userId, setIsChecked, setUserId, user, setUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useChecked = () => useContext(UserContext);
