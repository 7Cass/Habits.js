// material ui
import { TextField, Typography } from "@material-ui/core";

// react router dom
import { useHistory, Link } from "react-router-dom";

// react hook form + yup + resolvers
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
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

  const onRegister = (data) => {
    console.log(data);
    reset();
    history.push("/login");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onRegister)}>
        <TextField
          name="username"
          label="Username"
          variant="outlined"
          size="small"
          inputRef={register}
          error={!!errors.username}
          helperText={errors.username?.message}
        />
        <TextField
          name="password"
          label="Password"
          variant="outlined"
          size="small"
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
          type="email"
          inputRef={register}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <button type="submit">Enviar</button>
        <Typography>Já registrado?</Typography>
        <Link to="/login">login</Link>
      </form>
    </div>
  );
};

export default FormRegister;
