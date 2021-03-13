import API from "../../services";
import { useEffect, useState } from "react";
import { CardGroup, GroupsContent } from "./style";

// helper
import { getGroups } from "../../helper/groups";

//-----------------------------------------------
const Groups = () => {
  const [groups, setGroups] = useState([]);

  const getAllGroups = () => {
    API.get(getGroups()).then((res) => setGroups(res.data.results));
  };

  useEffect(() => {
    getAllGroups();
  }, []);

  return (
    <GroupsContent>
      {groups
        ? groups.map((group, index) => (
            <div key={index}>
              <CardGroup>
                <h2>{group.name}</h2>
                <h6>{group.description}</h6>
                <button>Visit</button>
              </CardGroup>
            </div>
          ))
        : null}
    </GroupsContent>
  );
};

export default Groups;
