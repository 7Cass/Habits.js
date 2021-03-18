// API
import API from "../../services";

// material ui
import { TextField, FormControl, Button } from "@material-ui/core";

// react hook form + yup + resolvers
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// providers
import { useChecked } from "../../providers/user";

//--------------------------------------------
import { patchUpdateActivity } from "../../helper/activities";
import { schemaUpdateActivity } from "../../helper/formValidation";
import { getOneGroup } from "../../helper/groups";
//--------------------------------------------

const FormUpdateActivity = (props) => {
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schemaUpdateActivity),
  });
  const { token, group, setGroup } = useChecked();
  // const [token] = useState(() => {
  //   const Token = localStorage.getItem("token") || "";

  //   if (!Token) {
  //     return "";
  //   }
  //   return JSON.parse(Token);
  // });

  const onRegister = async (data) => {
    console.log("atualização de atividade: ", props.activity);
    console.log("dados passados: ", data);
    try {
      await API.patch(patchUpdateActivity(props.activity.id), data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const takeGroup = await API.get(getOneGroup(group.id));
      setGroup(takeGroup.data);
      // props.getGroup();

      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormControl component="form" onSubmit={handleSubmit(onRegister)}>
      <TextField
        name="title"
        label="Nome da Atividade"
        variant="outlined"
        size="small"
        margin="dense"
        inputRef={register}
        error={!!errors.title}
        helperText={errors.title?.message}
      />
      <Button type="submit" variant="contained" size="small" color="primary">
        Atualizar Nome
      </Button>
    </FormControl>
  );
};

export default FormUpdateActivity;
