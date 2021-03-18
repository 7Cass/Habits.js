// react hook form + resolvers
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// services
import API from "../../services/";

// helper
import { postCreateGoal } from "../../helper/goals";
import { schemaCreateGoal } from "../../helper/formValidation";
import { getOneGroup } from "../../helper/groups";

// providers
import { useChecked } from "../../providers/user";

// components
import Button from "../Button";

// material ui
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { useFormStyles } from "../../styles/makeStyles";

//--------------------------------------------------------
const difficultyOptions = [
  "Muito Fácil",
  "Fácil",
  "Normal",
  "Difícil",
  "Desafio",
];

//--------------------------------------------------------
const FormCreateGoal = ({ handleClose }) => {
  const { group, token, setGroup } = useChecked();
  const classes = useFormStyles();
  const { register, handleSubmit, errors, reset, control } = useForm({
    resolver: yupResolver(schemaCreateGoal),
  });

  const handleForm = async (data) => {
    const newData = { ...data, how_much_achieved: 0, group: group.id };

    try {
      await API.post(postCreateGoal(), newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const takeGroup = await API.get(getOneGroup(group.id));
      setGroup(takeGroup.data);
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

      <FormControl margin="dense" className={classes.menuItem}>
        <InputLabel>Dificuldade</InputLabel>
        <Controller
          name="difficulty"
          control={control}
          defaultValue={difficultyOptions[2]}
          as={
            <Select className={classes.inputStyles}>
              {difficultyOptions.map((difficult, index) => (
                <MenuItem key={index} value={difficult}>
                  {difficult}
                </MenuItem>
              ))}
            </Select>
          }
        />
      </FormControl>
      <Button type="submit" styled="filled-light">
        Criar Meta
      </Button>
    </FormControl>
  );
};

export default FormCreateGoal;
