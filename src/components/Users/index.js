import API from "../../services";

// react
import { useEffect, useState } from "react";

// components
import CardUser from "../../components/CardUser";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

import { UsersContainer, ButtonsContent } from "./style";

// helper
import { getUsers } from "../../helper/users";

//-----------------------------------------------
const Users = () => {
  const [users, setUsers] = useState([]);
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);
  const [page, setPage] = useState(1);

  const getAllUsers = async () => {
    try {
      const response = await API.get(getUsers(page));
      setUsers(response.data.results);
      setNext(response.data.next);
      setPrev(response.data.previous);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
    // eslint-disable-next-line
  }, [page]);

  const handleNext = () => {
    setPage(page + 1);
  };
  const handlePrev = () => {
    setPage(page - 1);
  };

  return (
    <>
      <ButtonsContent>
        {prev !== null ? <NavigateBeforeIcon onClick={handlePrev} /> : null}
        <h3>{page}</h3>
        {next !== null ? <NavigateNextIcon onClick={handleNext} /> : null}
      </ButtonsContent>
      <UsersContainer>
        {users.length > 0
          ? users.map((element, index) => (
              <CardUser key={index} user={element} />
            ))
          : null}
      </UsersContainer>
    </>
  );
};

export default Users;
