import { UserProvider } from "./user";
import { GroupProvider } from "./group";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <GroupProvider>{children}</GroupProvider>
    </UserProvider>
  );
};

export default Providers;
