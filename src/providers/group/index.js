// react
import { createContext, useContext, useState, useEffect } from "react";

// services
import API from "../../services";

// helper
import { getGroups } from "../../helper/groups";

// -------------------------------------------------

const GroupContext = createContext();

// -------------------------------------------------
export const GroupProvider = ({ children }) => {
  const [groupId, setGroupId] = useState(0);
  const [allGroups, setAllGroups] = useState([]);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState(0);
  const [previousPage, setPreviousPage] = useState(0);

  const getAllGroups = async () => {
    try {
      const response = await API.get(getGroups(1));
      setAllGroups(response.data.results);

      if (response.data.next) {
        const next = response.data.next.split("=");
        setNextPage(next[1]);
      } else {
        setNextPage(0);
      }

      if (response.data.previous) {
        const prev = response.data.previous.split("=");
        setPreviousPage(prev[1]);
      } else {
        setPreviousPage(0);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const nextPageGroup = async () => {
    try {
      if (nextPage) {
        const response = await API.get(getGroups(nextPage));
        setAllGroups(response.data.results);

        if (response.data.next) {
          const next = response.data.next.split("=");
          setNextPage(next[1]);
        } else {
          setNextPage(0);
        }

        if (response.data.previous) {
          const prev = response.data.previous.split("=");
          if (prev[1]) {
            setPreviousPage(prev[1]);
          } else {
            setPreviousPage(1);
          }
        } else {
          setPreviousPage(0);
        }

        setPage(page + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const previousPageGroup = async () => {
    try {
      if (previousPage) {
        const response = await API.get(getGroups(previousPage));
        setAllGroups(response.data.results);

        if (response.data.next) {
          const next = response.data.next.split("=");
          setNextPage(next[1]);
        } else {
          setNextPage(0);
        }

        if (response.data.previous) {
          const prev = response.data.previous.split("=");
          if (prev[1]) {
            setPreviousPage(prev[1]);
          } else {
            setPreviousPage(1);
          }
        } else {
          setPreviousPage(0);
        }

        setPage(page - 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllGroups();
    // eslint-disable-next-line
  }, []);

  return (
    <GroupContext.Provider
      // value={{ groupId, setGroupId, group, setGroup, allGroups }}
      value={{
        groupId,
        setGroupId,
        allGroups,
        page,
        nextPage,
        previousPage,
        previousPageGroup,
        nextPageGroup,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};

export const useId = () => useContext(GroupContext);
