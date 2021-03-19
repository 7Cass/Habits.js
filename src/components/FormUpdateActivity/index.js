// API
import API from "../../services";

// material ui
import { TextField, FormControl } from "@material-ui/core";

// react hook form + yup + resolvers
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// providers
import { useChecked } from "../../providers/user";

// components
import Button from "../Button";

// helpers
import { patchUpdateActivity } from "../../helper/activities";
import { schemaUpdateActivity } from "../../helper/formValidation";
import { getOneGroup } from "../../helper/groups";

// styles
import { useFormStyles } from "../../styles/makeStyles";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
//--------------------------------------------

const FormUpdateActivity = (props) => {
  const classes = useFormStyles();
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schemaUpdateActivity),
  });
  const { token, group, setGroup } = useChecked();

  const onRegister = async (data) => {
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

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#55a1e3",
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
        <h1 className={classes.title}>Atualizar Atividade</h1>
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
        <Button type="submit" styled="outlined-light">
          Atualizar
        </Button>
      </FormControl>
    </ThemeProvider>
  );
};

export default FormUpdateActivity;
