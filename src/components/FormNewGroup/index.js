// API
import API from "../../services";

import { useState } from "react";

// material ui
import { TextField, FormControl, Button } from "@material-ui/core";

// react hook form + yup + resolvers
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
//--------------------------------------------
import { getGroups, postSubscribeGroup } from "../../helper/groups";
import { schemaNewGroup } from "../../helper/formValidation";

//--------------------------------------------
const FormNewGroup = () => {
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schemaNewGroup),
  });

  const [token] = useState(() => {
    const Token = localStorage.getItem("token") || "";

    if (!Token) {
      return "";
    }
    return JSON.parse(Token);
  });

  const onRegister = async (data) => {
    try {
      const response = await API.post(getGroups(), data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const groupID = response.data.id;
      await API.post(postSubscribeGroup(groupID), data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormControl component="form" onSubmit={handleSubmit(onRegister)}>
      <TextField
        name="name"
        label="Nome do Grupo"
        variant="outlined"
        size="small"
        margin="dense"
        inputRef={register}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        name="description"
        label="Descrição"
        variant="outlined"
        size="small"
        margin="dense"
        multiline
        rowsMax={3}
        inputRef={register}
        error={!!errors.description}
        helperText={errors.description?.message}
      />
      <TextField
        name="category"
        label="Categoria"
        variant="outlined"
        size="small"
        margin="dense"
        inputRef={register}
        error={!!errors.category}
        helperText={errors.category?.message}
      />
      <Button type="submit" variant="contained" size="small" color="primary">
        Criar Grupo
      </Button>
    </FormControl>
  );
};

export default FormNewGroup;
