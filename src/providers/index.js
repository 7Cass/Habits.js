import { UserProvider } from "./user";
import { GroupProvider } from "./group";
import { UserListProvider } from "./userList";

const Providers = ({ children }) => {
  return (
    <UserListProvider>
      <UserProvider>
        <GroupProvider>{children}</GroupProvider>
      </UserProvider>
    </UserListProvider>
  );
};

export default Providers;
