// API
import API from "../../services";

// material ui
import { TextField, Typography, FormControl } from "@material-ui/core";

// react router dom
import { useHistory, Link } from "react-router-dom";

// react hook form + yup + resolvers
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// helper
import { postCreateUser } from "../../helper/users";
import { schemaRegister } from "../../helper/formValidation";

// styles
import { useFormStyles } from "../../styles/makeStyles";

// components
import Button from "../Button";

//--------------------------------------------
const FormRegister = () => {
  const classes = useFormStyles();
  const history = useHistory();
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schemaRegister),
  });

  const onRegister = async (data) => {
    try {
      await API.post(postCreateUser(), data);

      reset();
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormControl component="form" onSubmit={handleSubmit(onRegister)}>
      <Typography variant="h2">Cadastro</Typography>
      <TextField
        className={classes.inputStyles}
        name="username"
        label="Nome de usuário"
        variant="outlined"
        inputRef={register}
        error={!!errors.username}
        helperText={errors.username?.message}
      />
      <TextField
        className={classes.inputStyles}
        name="password"
        label="Password"
        variant="outlined"
        type="password"
        inputRef={register}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <TextField
        className={classes.inputStyles}
        name="email"
        label="E-mail"
        variant="outlined"
        type="email"
        inputRef={register}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <Button type="submit" styled="outlined-light">
        Enviar
      </Button>
      <Typography>
        Já registrado? <Link to="/">Login</Link>
      </Typography>
    </FormControl>
  );
};

export default FormRegister;
