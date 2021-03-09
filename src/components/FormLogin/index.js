import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import API from "../../services/index.js";

import { Link, useHistory } from "react-router-dom";

import { Button, FormControl, TextField } from "@material-ui/core";

const FormLogin = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup.string().required("Campo Obrigatório!"),
    password: yup.string().required("Campo Obrigatório!"),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = async (data) => {
    try {
      const response = await API.post("/sessions/", data);

      localStorage.clear();
      localStorage.setItem("token", JSON.stringify(response.data.access));
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
