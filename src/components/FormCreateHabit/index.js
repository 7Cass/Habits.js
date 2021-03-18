// react hook form
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// services
import API from "../../services/index.js";

// helpers
import { postCreateHabit } from "../../helper/habits";
import { schemaCreateHabit } from "../../helper/formValidation";
import { getPersonalHabit } from "../../helper/habits";

// providers
import { useChecked } from "../../providers/user";

// material ui
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useFormStyles } from "../../styles/makeStyles/index.js";

// components
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
  const classes = useFormStyles();
  const { user, setHabits, token } = useChecked();
  const { register, handleSubmit, errors, reset, control } = useForm({
    resolver: yupResolver(schemaCreateHabit),
  });

  const handleForm = async (data) => {
    const newData = {
      ...data,
      achieved: false,
      how_much_achieved: 0,
      user: user.id,
    };

    try {
      await API.post(postCreateHabit(), newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const takeHabits = await API.get(getPersonalHabit(), {
        headers: { Authorization: `Bearer ${token}` },
      });
      takeHabits.data.sort((a, b) => a.id - b.id);
      setHabits(takeHabits.data);
      console.log("nova lista de hábitos: ", takeHabits.data);

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
      <TextField
        className={classes.inputStyles}
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
        className={classes.inputStyles}
        variant="outlined"
        size="small"
        margin="dense"
        label="Categoria"
        name="category"
        inputRef={register}
        error={!!errors.category}
        helperText={errors.category?.message}
      />
      <FormControl margin="dense" className={classes.menuItem}>
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

      <FormControl margin="dense" className={classes.menuItem}>
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
      <Button type="submit" styled="filled-light">
        Adicionar
      </Button>
    </FormControl>
  );
};

export default FormCreateHabit;
