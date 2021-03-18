// components
import CardUser from "../../components/CardUser";

// styles
import { UsersContainer, ButtonsContent } from "./style";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

// providers
import { useUserList } from "../../providers/userList";
//-----------------------------------------------
const Users = () => {
  const {
    page,
    allUsers,
    getNextPage,
    getPreviousPage,
    nextPage,
    previousPage,
  } = useUserList();

  return (
    <>
      <ButtonsContent>
        {previousPage !== null ? (
          <NavigateBeforeIcon onClick={getPreviousPage} />
        ) : null}
        <h3>{page}</h3>
        {nextPage !== null ? <NavigateNextIcon onClick={getNextPage} /> : null}
      </ButtonsContent>
      <UsersContainer>
        {allUsers.length > 0
          ? allUsers.map((element, index) => (
              <CardUser key={index} user={element} />
            ))
          : null}
      </UsersContainer>
    </>
  );
};

export default Users;
