// services
import API from "../../services";

// react
import { useEffect, useState } from "react";

// components
import CardGroup from "../../components/CardGroup";

// helper
import { getGroups } from "../../helper/groups";

//-----------------------------------------------
const Groups = () => {
  const [groups, setGroups] = useState([]);

  const getAllGroups = async () => {
    try {
      const response = await API.get(getGroups());
      setGroups(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllGroups();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {groups.length > 0
        ? groups.map((element, index) => (
            <CardGroup key={index} group={element} />
          ))
        : null}
    </>
  );
};

export default Groups;
