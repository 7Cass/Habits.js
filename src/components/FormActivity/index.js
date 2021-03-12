// API
import API from "../../services";

import { useEffect, useState } from "react";

// material ui
import { TextField, FormControl, Button } from "@material-ui/core";

// react hook form + yup + resolvers
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//--------------------------------------------
import { getOneUser } from "../../helper/users";
import { getOneGroup } from "../../helper/groups";
import { useChecked } from "../../providers/user";
//--------------------------------------------

const errorRequired = "Campo obrigatório";
const schema = yup.object().shape({
  title: yup.string().required(errorRequired),
  realization_time: yup.string().required(errorRequired),
});

//--------------------------------------------
const FormActivity = (props) => {
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const [token] = useState(() => {
    const Token = localStorage.getItem("token") || "";

    if (!Token) {
      return "";
    }
    return JSON.parse(Token);
  });

  const [groupId, setGroupId] = useState(0);
  const { userId } = useChecked();

  const getGroup = async (data) => {
    try {
      const takeUser = await API.get(getOneUser(userId), data);
      console.log(takeUser.data);

      const takeGroup = await API.get(getOneGroup(takeUser.data.group), data);
      console.log(takeGroup.data.id);

      setGroupId(takeGroup.data.id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGroup();
  }, []);

  const onRegister = async (data) => {
    try {
      const response = await API.post("/activities/", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const { activities } = props.group;
      const { setGroup } = props.setGroup;
      setGroup([...activities, response.data]);
      console.log(response);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormControl component="form" onSubmit={handleSubmit(onRegister)}>
      <TextField
        name="title"
        label="Nome da Atividade"
        variant="outlined"
        size="small"
        margin="dense"
        inputRef={register}
        error={!!errors.title}
        helperText={errors.title?.message}
      />
      <TextField
        name="realization_time"
        id="date"
        label="Tempo de Realização"
        type="datetime-local"
        inputRef={register}
        defaultValue="2021-05-11T11:30"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        name="group"
        variant="outlined"
        size="small"
        margin="dense"
        inputRef={register}
        value={groupId}
      />
      <Button type="submit" variant="contained" size="small" color="primary">
        Criar Atividade
      </Button>
    </FormControl>
  );
};

export default FormActivity;
