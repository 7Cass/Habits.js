// API
import API from "../../services/index.js";

// helpers
import { postLogin } from "../../helper/users/";
import { schemaLogin } from "../../helper/formValidation";
import { getOneUser } from "../../helper/users";
import { getOneGroup } from "../../helper/groups";
import { getPersonalHabit } from "../../helper/habits";

// JWT Decode
import jwt_decode from "jwt-decode";

// material ui
import {
  FormControl,
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@material-ui/core";

// react router dom
import { Link, useHistory } from "react-router-dom";

// react hook form + yup + resolvers
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// ContextAPI
import { useChecked } from "../../providers/user/";

// styles
import { useFormStyles } from "../../styles/makeStyles";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

// components
import Button from "../Button";

//-------------------------------------------------------
const FormLogin = () => {
  const {
    isChecked,
    setIsChecked,
    setUserId,
    setUser,
    setHabits,
    setGroup,
    setToken,
  } = useChecked();
  const classes = useFormStyles();
  const history = useHistory();
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  const handleChange = () => setIsChecked(!isChecked);

  const handleForm = async (data) => {
    try {
      const response = await API.post(postLogin(), data);
      const { user_id } = jwt_decode(response.data.access);

      setToken(response.data.access);
      setUserId(user_id);

      const takeUser = await API.get(getOneUser(user_id));
      setUser(takeUser.data);

      const takeHabits = await API.get(getPersonalHabit(), {
        headers: { Authorization: `Bearer ${response.data.access}` },
      });
      takeHabits.data.sort((a, b) => a.id - b.id);
      setHabits(takeHabits.data);

      if (takeUser.data.group) {
        const takeUserGroup = await API.get(getOneGroup(takeUser.data.group));
        setGroup(takeUserGroup.data);
      }

      if (isChecked) {
        sessionStorage.clear();
        localStorage.setItem("token", JSON.stringify(response.data.access));
      } else {
        localStorage.clear();
        sessionStorage.setItem("token", JSON.stringify(response.data.access));
      }

      reset();

      history.push("/homepage");
    } catch (error) {
      console.error(error);
    }
  };

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#55a1e3",
      },
      text: {
        primary: "#55a1e3",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <FormControl
        className={classes.formControlStyles}
        component="form"
        onSubmit={handleSubmit(handleForm)}
      >
        <Typography variant="h2">Entrar</Typography>
        <TextField
          className={classes.inputStyles}
          variant="outlined"
          label="Usu??rio"
          name="username"
          inputRef={register}
          error={!!errors.username}
          helperText={errors.username?.message}
        />
        <TextField
          className={classes.inputStyles}
          type="password"
          variant="outlined"
          label="Senha"
          name="password"
          inputRef={register}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <FormControlLabel
          control={
            <Checkbox
              style={{ color: "#55a1e3" }}
              color="primary"
              checked={isChecked}
              onChange={handleChange}
            />
          }
          label="Manter logado?"
        />
        <Button type="submit" styled="outlined-light" children="Entrar" />
        <p>
          N??o possui conta?{" "}
          <Link to="/register" className={classes.link}>
            Fazer cadastro
          </Link>
        </p>
      </FormControl>
    </ThemeProvider>
  );
};

export default FormLogin;
