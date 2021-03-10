// API
import API from "../../services";

import { useState } from "react";

// material ui
import {
  TextField,
  FormControl,
  Button,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";

// react hook form + yup + resolvers
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//--------------------------------------------
const errorRequired = "Campo obrigatório";
const schema = yup.object().shape({
  how_much_achieved: yup.string().required(errorRequired),
  achieved: yup.boolean(),
});

//--------------------------------------------
const FormUpdateHabit = ({ id }) => {
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const [isAchieved, setIsAchieved] = useState(false);

  const [token] = useState(() => {
    const Token = localStorage.getItem("token") || "";

    if (!Token) {
      return "";
    }
    return JSON.parse(Token);
  });

  const handleChange = () => setIsAchieved(!isAchieved);

  const onRegister = async (data) => {
    try {
      const response = API.patch(`/habits/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormControl component="form" onSubmit={handleSubmit(onRegister)}>
      <TextField
        name="how_much_achieved"
        label="Progresso"
        variant="outlined"
        size="small"
        margin="dense"
        inputRef={register}
        error={!!errors.how_much_achieved}
        helperText={errors.how_much_achieved?.message}
      />
      <FormControlLabel
        control={
          <Checkbox
            color="primary"
            checked={isAchieved}
            onChange={handleChange}
            name="achieved"
            inputRef={register}
          />
        }
        label="Descrição"
      />
      <Button type="submit" variant="contained" size="small" color="primary">
        Atualizar hábito
      </Button>
    </FormControl>
  );
};

export default FormUpdateHabit;
