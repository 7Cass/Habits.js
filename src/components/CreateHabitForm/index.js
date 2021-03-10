import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import API from "../../services/index.js";

import { TextField, FormControl } from "@material-ui/core";

const CreateHabitForm = () => {
  const errorRequired = "Campo Obrigatório";
  const schema = yup.object().shape({
    title: yup.string().required(errorRequired),
    category: yup.string().required(errorRequired),
    difficult: yup.string().required(errorRequired),
    frequency: yup.string().required(errorRequired),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = async (data) => {};

  const difficulty = ["Muito Fácil", "Fácil", "Normal", "Difícil", "Desafio"];
  const frequency = [
    "Diária",
    "Dia Sim/Não",
    "A Cada 2 Dias",
    "A Cada 3 Dias",
    "Semanal",
    "Quinzenal",
    "Mensal",
  ];

  return (
    <FormControl onSubmit={handleSubmit(handleForm)}>
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
      <TextField
        variant="outlined"
        size="small"
        margin="dense"
        label="Dificuldade"
        name="difficult"
        inputRef={register}
        error={!!errors.category}
        helperText={errors.category?.message}
      />
    </FormControl>
  );
};

export default CreateHabitForm;
