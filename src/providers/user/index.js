import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <UserContext.Provider value={{ isChecked, setIsChecked }}>
      {children}
    </UserContext.Provider>
  );
};

export const useChecked = () => useContext(UserContext);
