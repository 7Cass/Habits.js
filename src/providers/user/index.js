import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isChecked, setIsChecked] = useState(true);
  const [userId, setUserId] = useState(null);

  return (
    <UserContext.Provider
      value={{ isChecked, userId, setIsChecked, setUserId }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useChecked = () => useContext(UserContext);
