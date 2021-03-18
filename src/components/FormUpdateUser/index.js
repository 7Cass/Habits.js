// API
import API from "../../services";

// react
import { useState } from "react";

// react hook form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// material ui
import { Typography, FormControl, TextField } from "@material-ui/core";

// global state
import { useChecked } from "../../providers/user";

// helper
import { patchUpdateUser } from "../../helper/users";
import { schemaUpdateUser } from "../../helper/formValidation";

// styles
import { useFormStyles } from "../../styles/makeStyles";

import { ThemeProvider, withStyles, createMuiTheme } from "@material-ui/core";

// components
import Button from "../Button";
//-----------------------------------------
const FormUpdateUser = () => {
  const classes = useFormStyles();
  const { isChecked, userId, user, setUser } = useChecked();
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schemaUpdateUser),
  });
  const [token] = useState(() => {
    const Token = isChecked
      ? localStorage.getItem("token") || ""
      : sessionStorage.getItem("token") || "";

    if (!Token) {
      return "";
    }
    return JSON.parse(Token);
  });

  const onUpdate = async (data) => {
    try {
      await API.patch(patchUpdateUser(userId), data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const newUser = { ...user, username: data.username };
      setUser(newUser);

      reset();
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
  });

  return (
    <ThemeProvider theme={theme}>
      <FormControl
        component="form"
        onSubmit={handleSubmit(onUpdate)}
        className={classes.formUpdate}
      >
        <div>
          <h2>Atualizar usuário</h2>
        </div>
        <div>
          <CssTextField
            className={classes.inputStyles}
            name="username"
            label="Nome de usuário"
            variant="outlined"
            inputRef={register}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
        </div>
        <div>
          <Button type="submit" styled="outlined-light" size="large">
            Enviar
          </Button>
        </div>
      </FormControl>
    </ThemeProvider>
  );
};

export default FormUpdateUser;
