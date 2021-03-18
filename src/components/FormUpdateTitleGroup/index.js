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
import { patchUpdateGroup } from "../../helper/groups";
import { schemaUpdateTitleGroup } from "../../helper/formValidation";
import { getOneGroup } from "../../helper/groups";
//--------------------------------------------

const FormUpdateActivity = (props) => {
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schemaUpdateTitleGroup),
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
    try {
      await API.patch(patchUpdateGroup(group.id), data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const takeUserGroup = await API.get(getOneGroup(group.id));
      setGroup(takeUserGroup.data);

      // props.getGroup();

      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormControl component="form" onSubmit={handleSubmit(onRegister)}>
      <TextField
        name="name"
        label="Nome da Grupo"
        variant="outlined"
        size="small"
        margin="dense"
        inputRef={register}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <Button type="submit" variant="contained" size="small" color="primary">
        Atualizar Nome
      </Button>
    </FormControl>
  );
};

export default FormUpdateActivity;
