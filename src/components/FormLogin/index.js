import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import API from "../../services/index.js";

import { Link, useHistory } from "react-router-dom";

import {
  Button,
  FormControl,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";

const FormLogin = () => {
  const history = useHistory();

  const [isChecked, setIsChecked] = useState(true);

  const schema = yup.object().shape({
    username: yup.string().required("Campo Obrigatório!"),
    password: yup.string().required("Campo Obrigatório!"),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleChange = () => setIsChecked(!isChecked);

  const handleForm = async (data) => {
    try {
      const response = await API.post("/sessions/", data);

      // Remover estas 2 linahas após função logout ser feita
      localStorage.clear();
      sessionStorage.clear();

      let persistence = isChecked ? localStorage : sessionStorage;
      persistence.setItem("token", JSON.stringify(response.data.access));

      // if (isChecked) {
      //   localStorage.setItem("token", JSON.stringify(response.data.access));
      // } else {
      //   sessionStorage.setItem("token", JSON.stringify(response.data.access));
      // }

      reset();
      history.push("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormControl component="form" onSubmit={handleSubmit(handleForm)}>
      <TextField
        variant="outlined"
        size="small"
        margin="dense"
        label="Usuário"
        name="username"
        inputRef={register}
        error={!!errors.username}
        helperText={errors.username?.message}
      />
      <TextField
        type="password"
        variant="outlined"
        size="small"
        margin="dense"
        label="Senha"
        name="password"
        inputRef={register}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <FormControlLabel
        control={
          <Checkbox
            color="primary"
            checked={isChecked}
            onChange={handleChange}
          />
        }
        label="Manter logado?"
      />
      <Button type="submit" variant="contained" color="primary">
        Entrar
      </Button>
      <p>
        Não possui conta? <Link to="/register">Fazer cadastro</Link>
      </p>
    </FormControl>
  );
};

export default FormLogin;
