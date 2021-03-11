// API
import API from "../../services";

// material ui
import { TextField, Typography, FormControl, Button } from "@material-ui/core";

// react router dom
import { useHistory, Link } from "react-router-dom";

// react hook form + yup + resolvers
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// helper
import { postCreateUser } from "../../helper/users";
//--------------------------------------------
const errorRequired = "Campo obrigatório";
const schema = yup.object().shape({
  username: yup.string().required(errorRequired),
  password: yup
    .string()
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .required(errorRequired),
  email: yup
    .string()
    .email("Formato requerido: ***@***")
    .required(errorRequired),
});

//--------------------------------------------
const FormRegister = () => {
  const history = useHistory();
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onRegister = async (data) => {
    try {
      const response = await API.post(postCreateUser, data);
      console.log(response);
      reset();
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormControl component="form" onSubmit={handleSubmit(onRegister)}>
      <TextField
        name="username"
        label="Nome de usuário"
        variant="outlined"
        size="small"
        margin="dense"
        inputRef={register}
        error={!!errors.username}
        helperText={errors.username?.message}
      />
      <TextField
        name="password"
        label="Password"
        variant="outlined"
        size="small"
        margin="dense"
        type="password"
        inputRef={register}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <TextField
        name="email"
        label="E-mail"
        variant="outlined"
        size="small"
        margin="dense"
        type="email"
        inputRef={register}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <Button type="submit" variant="contained" size="small" color="primary">
        Enviar
      </Button>
      <Typography>
        Já registrado?<Link to="/login">login</Link>
      </Typography>
    </FormControl>
  );
};

export default FormRegister;
