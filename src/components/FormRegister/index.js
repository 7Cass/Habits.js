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
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormControl component="form" onSubmit={handleSubmit(onRegister)}>
      <TextField
        className={classes.inputStyles}
        name="username"
        label="Nome de usuário"
        variant="outlined"
        size="small"
        inputRef={register}
        error={!!errors.username}
        helperText={errors.username?.message}
      />
      <TextField
        className={classes.inputStyles}
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
        className={classes.inputStyles}
        name="email"
        label="E-mail"
        variant="outlined"
        size="small"
        type="email"
        inputRef={register}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <Button type="submit" styled="filled-light">
        Enviar
      </Button>
      <Typography>
        Já registrado? <Link to="/login">login</Link>
      </Typography>
    </FormControl>
  );
};

export default FormRegister;
