// API
import API from "../../services";

// material ui
import { TextField, FormControl, Button } from "@material-ui/core";

// react hook form + yup + resolvers
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//--------------------------------------------
import { postCreateActivity } from "../../helper/activities";
import { schemaActivity } from "../../helper/formValidation";
import { useChecked } from "../../providers/user";
import { getOneGroup } from "../../helper/groups";
//--------------------------------------------

//--------------------------------------------
const FormActivity = (props) => {
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schemaActivity),
  });
  const { token, group, setGroup } = useChecked();

  const onRegister = async (data) => {
    const newData = {
      ...data,
      group: group.id,
    };

    try {
      await API.post(postCreateActivity(), newData, {
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
      <TextField
        name="realization_time"
        id="date"
        label="Tempo de Realização"
        type="datetime-local"
        inputRef={register}
        defaultValue="2021-05-11T11:30"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button type="submit" variant="contained" size="small" color="primary">
        Criar Atividade
      </Button>
    </FormControl>
  );
};

export default FormActivity;
