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

  return (
    <FormControl component="form" onSubmit={handleSubmit(onUpdate)}>
      <div>
        <Typography>Atualizar usuário</Typography>
      </div>
      <div>
        <TextField
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
        <Button type="submit" styled="outlined-light">
          Enviar
        </Button>
      </div>
    </FormControl>
  );
};

export default FormUpdateUser;
