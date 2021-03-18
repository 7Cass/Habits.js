import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import API from "../../services/";
import { postCreateGoal } from "../../helper/goals";
import { schemaCreateGoal } from "../../helper/formValidation";
import { getOneGroup } from "../../helper/groups";

import { useChecked } from "../../providers/user";

import Button from "../Button";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";

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

      // getGroup();
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
        Adicionar Meta
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
      <Button type="submit" styled="outlined">
        Criar Meta
      </Button>
    </FormControl>
  );
};

export default FormCreateGoal;
