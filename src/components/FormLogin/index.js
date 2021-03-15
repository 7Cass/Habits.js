import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import jwt_decode from "jwt-decode";

import API from "../../services/index.js";
import { postLogin } from "../../helper/users/";
import { schemaLogin } from "../../helper/formValidation";

import { Link, useHistory } from "react-router-dom";

import { useChecked } from "../../providers/user/";

import {
  FormControl,
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@material-ui/core";

import Button from "../Button";
//-------------------------------------------------------

//-------------------------------------------------------
const FormLogin = () => {
  const { isChecked, setIsChecked, setUserId } = useChecked();
  const history = useHistory();
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  const handleChange = () => setIsChecked(!isChecked);

  const handleForm = async (data) => {
    try {
      const response = await API.post(postLogin(), data);

      const { user_id } = jwt_decode(response.data.access);
      setUserId(user_id);

      if (isChecked) {
        sessionStorage.clear();
        localStorage.setItem("token", JSON.stringify(response.data.access));
      } else {
        localStorage.clear();
        sessionStorage.setItem("token", JSON.stringify(response.data.access));
      }

      reset();

      // *** PRECISA ATUALIZAR A ROTA ***
      history.push("/testforms");
      // *** PRECISA ATUALIZAR A ROTA ***
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormControl component="form" onSubmit={handleSubmit(handleForm)}>
      <Typography variant="h2">Entrar</Typography>
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
      <Button type="submit" styled="outlined" children="Entrar" />
      <p>
        Não possui conta? <Link to="/register">Fazer cadastro</Link>
      </p>
    </FormControl>
  );
};

export default FormLogin;
