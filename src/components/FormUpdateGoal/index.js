// API
import API from "../../services/";

// helper
import { patchUpdateGoals } from "../../helper/goals";

// ContextAPI
import { useId } from "../../providers/group";
import { useChecked } from "../../providers/user";

// material ui
import { Checkbox, FormControlLabel, Typography } from "@material-ui/core";

// components
import Button from "../Button";

import { useEffect, useState } from "react";

const FormUpdateGoal = ({ handleClose }) => {
  const { group } = useId();

  const [isAchieved, setIsAchieved] = useState(false);
  const [token] = useState(() => {
    const Token = localStorage.getItem("token") || "";

    if (!Token) {
      return "";
    }
    return JSON.parse(Token);
  });

  const handleChange = () => {
    setIsAchieved(!isAchieved);
  };

  // Após testar pode apagar daqui até a linha 46
  const getUser = async () => {
    const { data } = await API.get("/groups/29/", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  const onUpdate = async () => {
    try {
      console.log(group);
      await API.patch(
        patchUpdateGoals(448), //goalId
        { achieved: isAchieved },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTimeout(() => {
        handleClose();
      }, 500);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <Typography>Atualizar Meta</Typography>
      </div>
      <div>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={isAchieved}
              onChange={handleChange}
            />
          }
          label="Completo?"
        />
      </div>
      <div>
        <Button onClick={() => onUpdate()} styled="outlined-filled">
          Enviar
        </Button>
      </div>
    </div>
  );
};

export default FormUpdateGoal;
