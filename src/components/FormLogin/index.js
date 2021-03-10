import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import API from "../../services/index.js";

import { Link, useHistory } from "react-router-dom";

import { useChecked } from "../../providers/user/index.js";

import {
  FormControl,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";

import Button from "../Button";

const FormLogin = () => {
  const { isChecked, setIsChecked } = useChecked();

  const history = useHistory();

  const errorRequired = "Campo Obrigatório";
  const schema = yup.object().shape({
    username: yup.string().required(errorRequired),
    password: yup.string().required(errorRequired),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleChange = () => setIsChecked(!isChecked);

  const handleForm = async (data) => {
    try {
      const response = await API.post("/sessions/", data);

      // let persistence = isChecked ? localStorage : sessionStorage;
      // persistence.setItem("token", JSON.stringify(response.data.access));

      if (isChecked) {
        sessionStorage.clear();
        localStorage.setItem("token", JSON.stringify(response.data.access));
      } else {
        localStorage.clear();
        sessionStorage.setItem("token", JSON.stringify(response.data.access));
      }

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
      <Button type="submit" children="Entrar" />
      <p>
        Não possui conta? <Link to="/register">Fazer cadastro</Link>
      </p>
    </FormControl>
  );
};

export default FormLogin;
