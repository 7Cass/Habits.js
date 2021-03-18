// API
import API from "../../services";

import { useState } from "react";

// material ui
import { TextField, FormControl } from "@material-ui/core";

// react hook form + yup + resolvers
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// component
import Button from "../Button";

//--------------------------------------------
import { patchUpdateGroup } from "../../helper/groups";
import { schemaUpdateTitleGroup } from "../../helper/formValidation";
import { useFormStyles } from "../../styles/makeStyles";
//--------------------------------------------

const FormUpdateActivity = (props) => {
  const classes = useFormStyles();
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schemaUpdateTitleGroup),
  });

  const [token] = useState(() => {
    const Token = localStorage.getItem("token") || "";

    if (!Token) {
      return "";
    }
    return JSON.parse(Token);
  });

  const onRegister = async (data) => {
    try {
      await API.patch(patchUpdateGroup(props.groupId), data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      props.getGroup();

      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormControl component="form" onSubmit={handleSubmit(onRegister)}>
      <TextField
        className={classes.inputStyles}
        name="name"
        label="Nome da Grupo"
        variant="outlined"
        size="small"
        margin="dense"
        inputRef={register}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <Button type="submit" styled="filled-light">
        Atualizar Nome
      </Button>
    </FormControl>
  );
};

export default FormUpdateActivity;
