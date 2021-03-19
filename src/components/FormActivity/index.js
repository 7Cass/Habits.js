// API
import API from "../../services";

// material ui
import { TextField, FormControl } from "@material-ui/core";

// react hook form + yup + resolvers
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// components
import Button from "../Button";

//--------------------------------------------
import { postCreateActivity } from "../../helper/activities";
import { schemaActivity } from "../../helper/formValidation";
import { useChecked } from "../../providers/user";
import { getOneGroup } from "../../helper/groups";
//--------------------------------------------
import { useFormStyles } from "../../styles/makeStyles";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
//--------------------------------------------
const FormActivity = (props) => {
  const classes = useFormStyles();

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

      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#55a1e3",
      },
      text: {
        primary: "#55a1e3",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <FormControl
        className={classes.formControlStyles}
        component="form"
        onSubmit={handleSubmit(onRegister)}
      >
        <h1 className={classes.title} style={{ fontSize: "1.7rem" }}>
          Adicionar Atividade
        </h1>
        <TextField
          className={classes.inputStyles}
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
          className={classes.calendar}
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
        <Button type="submit" styled="outlined-light">
          Criar Atividade
        </Button>
      </FormControl>
    </ThemeProvider>
  );
};

export default FormActivity;
