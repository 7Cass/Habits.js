// components
import CardGroup from "../../components/CardGroup";

// providers
import { useId } from "../../providers/group";

//-----------------------------------------------
const Groups = () => {
  const { allGroups } = useId();

  return (
    <>
      {allGroups.length > 0
        ? allGroups.map((element, index) => (
            <CardGroup key={index} group={element} />
          ))
        : null}
    </>
  );
};

export default Groups;
