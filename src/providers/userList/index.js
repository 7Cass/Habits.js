// react
import { createContext, useContext, useState, useEffect } from "react";

// services
import API from "../../services";

// helper
import { getUsers } from "../../helper/users";
// ------------------------------------------------
const UserListContext = createContext();

// ------------------------------------------------
export const UserListProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState(0);
  const [previousPage, setPreviousPage] = useState(0);

  const getAllUser = async () => {
    try {
      const response = await API.get(getUsers(page));
      setAllUsers(response.data.results);

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

  const getNextPage = async () => {
    try {
      if (nextPage) {
        const response = await API.get(getUsers(nextPage));
        setAllUsers(response.data.results);

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

  const getPreviousPage = async () => {
    try {
      if (previousPage) {
        const response = await API.get(getUsers(previousPage));
        setAllUsers(response.data.results);

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
    getAllUser();
    // eslint-disable-next-line
  }, []);

  return (
    <UserListContext.Provider
      value={{
        page,
        setPage,
        allUsers,
        setAllUsers,
        nextPage,
        setNextPage,
        previousPage,
        setPreviousPage,
        getNextPage,
        getPreviousPage,
      }}
    >
      {children}
    </UserListContext.Provider>
  );
};

export const useUserList = () => useContext(UserListContext);
