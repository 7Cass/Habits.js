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
import { ThemeProvider, withStyles, createMuiTheme } from "@material-ui/core";

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

  const CssTextField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: "green",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "green",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#55a1e3",
          border: "2px solid",
          borderRadius: "5px",
        },
        "&:hover fieldset": {
          borderColor: "#55a1e3",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#55a1e3",
        },
        "& .MuiOutlinedInput-input": {
          padding: "20px",
          fontFamily: "Montserrat",
        },
      },
    },
  })(TextField);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#55a1e3",
      },
    },
    typography: {
      fontFamily: "Montserrat",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <FormControl component="form" onSubmit={handleSubmit(onRegister)}>
        <Typography variant="h2">Cadastro</Typography>
        <CssTextField
          className={classes.inputStyles}
          name="username"
          label="Nome de usuário"
          variant="outlined"
          inputRef={register}
          error={!!errors.username}
          helperText={errors.username?.message}
        />
        <CssTextField
          className={classes.inputStyles}
          name="password"
          label="Password"
          variant="outlined"
          type="password"
          inputRef={register}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <CssTextField
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
        <Typography style={{ textAlign: "center", paddingBottom: 0 }}>
          Já registrado?{" "}
          <Link to="/" className={classes.link}>
            Login
          </Link>
        </Typography>
      </FormControl>
    </ThemeProvider>
  );
};

export default FormRegister;
