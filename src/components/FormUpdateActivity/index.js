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
import { ThemeProvider, withStyles, createMuiTheme } from "@material-ui/core";
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

  const CssTextField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: "green",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "green",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#55a1e3",
          border: "2px solid",
          borderRadius: "5px",
        },
        "&:hover fieldset": {
          borderColor: "#55a1e3",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#55a1e3",
        },
        "& .MuiOutlinedInput-input": {
          padding: "10px 20px 15px",
          fontFamily: "Montserrat",
        },
      },
    },
  })(TextField);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#55a1e3",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <FormControl component="form" onSubmit={handleSubmit(onRegister)}>
        <h1 className={classes.title}>Atualizar Atividade</h1>
        <CssTextField
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
