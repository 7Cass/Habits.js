import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import API from "../../services/index.js";
import { postCreateHabit } from "../../helper/habits";
import { useChecked } from "../../providers/user";
import { schemaCreateHabit } from "../../helper/formValidation";

import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@material-ui/core";

import Button from "../Button";
import { useFormStyles } from "../../styles/makeStyles/index.js";

import { ThemeProvider, withStyles, createMuiTheme } from "@material-ui/core";

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
  const { isChecked, userId } = useChecked();
  const { register, handleSubmit, errors, reset, control } = useForm({
    resolver: yupResolver(schemaCreateHabit),
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
          borderRadius: "10px",
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
        "& .MuiOutlinedInput-input": {
          padding: "10px 20px 15px",
        },
      },
    },
  })(TextField);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#55a1e3",
      },
      text: {
        primary: "#55a1e3",
      },
      action: {
        active: "#55a1e3",
        hover: "#eff7fe",
        selected: "#eff7fe",
        disabledBackground: "#55a1e3",
      },
      background: {
        paper: "#16181c",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <FormControl component="form" onSubmit={handleSubmit(handleForm)}>
        <h2 className={classes.title}>Adicionar Hábito</h2>
        <CssTextField
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
        <CssTextField
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
        <Button type="submit" styled="outlined-light">
          Adicionar
        </Button>
      </FormControl>
    </ThemeProvider>
  );
};

export default FormCreateHabit;
