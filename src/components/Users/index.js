// components
import CardUser from "../../components/CardUser";

// styles
import { UsersContainer } from "./style";

// providers
import { useUserList } from "../../providers/userList";
//-----------------------------------------------
const Users = () => {
  const { allUsers } = useUserList();

  return (
    <>
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
