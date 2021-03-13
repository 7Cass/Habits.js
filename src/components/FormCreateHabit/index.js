import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import API from "../../services/index.js";
import { postCreateHabit } from "../../helper/habits";

import { useChecked } from "../../providers/user";

import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@material-ui/core";

import Button from "../Button";

//----------------------------------------------
const difficultyOptions = [
  "Muito Fácil",
  "Fácil",
  "Normal",
  "Difícil",
  "Desafio",
];
const frequencyOptions = [
  "Diária",
  "Dia Sim/Não",
  "A Cada 2 Dias",
  "A Cada 3 Dias",
  "Semanal",
  "Quinzenal",
  "Mensal",
];
//----------------------------------------------
const FormCreateHabit = ({ handleClose }) => {
  const { isChecked, userId } = useChecked();

  const errorRequired = "Campo Obrigatório";
  const schema = yup.object().shape({
    title: yup.string().required(errorRequired),
    category: yup.string().required(errorRequired),
    difficulty: yup.string().required(errorRequired),
    frequency: yup.string().required(errorRequired),
  });

  const { register, handleSubmit, errors, reset, control } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = async (data) => {
    const token = isChecked
      ? JSON.parse(localStorage.getItem("token"))
      : JSON.parse(sessionStorage.getItem("token"));

    try {
      await API.post(
        postCreateHabit(),
        {
          title: data.title,
          category: data.category,
          difficulty: data.difficulty,
          frequency: data.frequency,
          achieved: false,
          how_much_achieved: 0,
          user: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      reset();
      setTimeout(() => {
        handleClose();
      }, 500);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormControl component="form" onSubmit={handleSubmit(handleForm)}>
      <Typography variant="h4" color="primary">
        Adicionar Hábito
      </Typography>
      <TextField
        variant="outlined"
        size="small"
        margin="dense"
        label="Título"
        name="title"
        inputRef={register}
        error={!!errors.title}
        helperText={errors.title?.message}
      />
      <TextField
        variant="outlined"
        size="small"
        margin="dense"
        label="Categoria"
        name="category"
        inputRef={register}
        error={!!errors.category}
        helperText={errors.category?.message}
      />
      <FormControl margin="dense">
        <InputLabel>Dificuldade</InputLabel>
        <Controller
          name="difficulty"
          control={control}
          defaultValue={difficultyOptions[2]}
          as={
            <Select>
              {difficultyOptions.map((difficult, index) => (
                <MenuItem key={index} value={difficult}>
                  {difficult}
                </MenuItem>
              ))}
            </Select>
          }
        />
      </FormControl>
      <FormControl margin="dense">
        <InputLabel>Frequência</InputLabel>
        <Controller
          name="frequency"
          control={control}
          defaultValue={frequencyOptions[0]}
          as={
            <Select>
              {frequencyOptions.map((frequency, index) => (
                <MenuItem key={index} value={frequency}>
                  {frequency}
                </MenuItem>
              ))}
            </Select>
          }
        />
      </FormControl>
      <Button type="submit" styled="outlined">
        Adicionar
      </Button>
    </FormControl>
  );
};

export default FormCreateHabit;
