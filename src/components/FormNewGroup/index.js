// API
import API from "../../services";

import { useState } from "react";

// material ui
import { TextField, FormControl, Button } from "@material-ui/core";

// react hook form + yup + resolvers
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//--------------------------------------------
const errorRequired = "Campo obrigatório";
const schema = yup.object().shape({
  name: yup.string().required(errorRequired),
  description: yup.string().required(errorRequired),
  category: yup.string().required(errorRequired),
});

//--------------------------------------------
const FormNewGroup = () => {
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
  //response.data.id
  const onRegister = async (data) => {
    try {
      const response = await API.post("/groups/", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const userID = response.data.id;
      await API.post(`/groups/${userID}/subscribe/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response);
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