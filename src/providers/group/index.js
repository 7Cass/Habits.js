import { createContext, useContext, useState } from "react";

const GroupContext = createContext();

export const GroupProvider = ({ children }) => {
  const [groupId, setGroupId] = useState(0);

  return (
    <GroupContext.Provider value={{ groupId, setGroupId }}>
      {children}
    </GroupContext.Provider>
  );
};

export const useId = () => useContext(GroupContext);
