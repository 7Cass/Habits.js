// yup
import * as yup from "yup";

//------------------------------
const errorRequired = "Campo obrigatório";

export const schemaRegister = yup.object().shape({
  username: yup.string().required(errorRequired),
  password: yup
    .string()
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .required(errorRequired),
  email: yup
    .string()
    .email("Formato requerido: ***@***")
    .required(errorRequired),
});

export const schemaLogin = yup.object().shape({
  username: yup.string().required(errorRequired),
  password: yup.string().required(errorRequired),
});

export const schemaCreateHabit = yup.object().shape({
  title: yup.string().required(errorRequired),
  category: yup.string().required(errorRequired),
  difficulty: yup.string().required(errorRequired),
  frequency: yup.string().required(errorRequired),
});

export const schemaNewGroup = yup.object().shape({
  name: yup.string().required(errorRequired),
  description: yup.string().required(errorRequired),
  category: yup.string().required(errorRequired),
});

export const schemaCreateGoal = yup.object().shape({
  title: yup.string().required(errorRequired),
  difficulty: yup.string().required(errorRequired),
});

export const schemaActivity = yup.object().shape({
  title: yup.string().required(errorRequired),
  realization_time: yup.string().required(errorRequired),
});

export const schemaUpdateActivity = yup.object().shape({
  title: yup.string().required(errorRequired),
});

export const schemaUpdateUser = yup.object().shape({
  username: yup.string().required(errorRequired),
});

export const schemaUpdateTitleGroup = yup.object().shape({
  name: yup.string().required(errorRequired),
});