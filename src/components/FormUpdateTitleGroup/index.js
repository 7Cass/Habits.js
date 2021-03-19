// API
import API from "../../services";

// material ui
import { TextField, FormControl } from "@material-ui/core";

// react hook form + yup + resolvers
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// providers
import { useChecked } from "../../providers/user";
// component
import Button from "../Button";

// helpers
import { patchUpdateGroup } from "../../helper/groups";
import { schemaUpdateTitleGroup } from "../../helper/formValidation";
import { getOneGroup } from "../../helper/groups";

// styles
import { useFormStyles } from "../../styles/makeStyles";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

//--------------------------------------------

const FormUpdateActivity = (props) => {
  const classes = useFormStyles();
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schemaUpdateTitleGroup),
  });
  const { token, group, setGroup } = useChecked();
  const onRegister = async (data) => {
    try {
      await API.patch(patchUpdateGroup(group.id), data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const takeUserGroup = await API.get(getOneGroup(group.id));
      setGroup(takeUserGroup.data);

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
        <h1 className={classes.title}>Atualizar Nome</h1>
        <TextField
          className={classes.inputStyles}
          name="name"
          label="Nome do Grupo"
          variant="outlined"
          size="small"
          margin="dense"
          inputRef={register}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <Button type="submit" styled="outlined-light">
          Atualizar Nome
        </Button>
      </FormControl>
    </ThemeProvider>
  );
};

export default FormUpdateActivity;
