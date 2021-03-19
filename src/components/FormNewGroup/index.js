// API
import API from "../../services";

// material ui
import { TextField, FormControl } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

import Button from "../Button";

// react hook form + yup + resolvers
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// providers
import { useChecked } from "../../providers/user";
import { useFormStyles } from "../../styles/makeStyles";
//--------------------------------------------
import { postCreateGroup, postSubscribeGroup } from "../../helper/groups";
import { schemaNewGroup } from "../../helper/formValidation";
import { getOneGroup } from "../../helper/groups";

//--------------------------------------------
const FormNewGroup = () => {
  const classes = useFormStyles();

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schemaNewGroup),
  });
  const { token, setGroup } = useChecked();

  const onRegister = async (data) => {
    try {
      const response = await API.post(postCreateGroup(), data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const groupID = response.data.id;
      await API.post(postSubscribeGroup(groupID), data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const takeUserGroup = await API.get(getOneGroup(groupID));
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
        <TextField
          name="name"
          label="Nome do Grupo"
          variant="outlined"
          size="small"
          margin="dense"
          inputRef={register}
          error={!!errors.name}
          helperText={errors.name?.message}
          className={classes.inputStyles}
        />
        <TextField
          name="description"
          label="Descrição"
          variant="outlined"
          size="small"
          margin="dense"
          multiline
          rowsMax={3}
          inputRef={register}
          error={!!errors.description}
          helperText={errors.description?.message}
          className={classes.inputStyles}
        />
        <TextField
          name="category"
          label="Categoria"
          variant="outlined"
          size="small"
          margin="dense"
          inputRef={register}
          error={!!errors.category}
          helperText={errors.category?.message}
          className={classes.inputStyles}
        />
        <Button type="submit" styled="outlined-light">
          Criar Grupo
        </Button>
      </FormControl>
    </ThemeProvider>
  );
};

export default FormNewGroup;
