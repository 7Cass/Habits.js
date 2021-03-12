import { createContext, useContext, useState } from "react";

const GroupContext = createContext();

export const GroupProvider = ({ children }) => {
  const [groupId, setGroupId] = useState(0);
  const [group, setGroup] = useState([]);

  return (
    <GroupContext.Provider value={{ groupId, setGroupId, group, setGroup }}>
      {children}
    </GroupContext.Provider>
  );
};

export const useId = () => useContext(GroupContext);
