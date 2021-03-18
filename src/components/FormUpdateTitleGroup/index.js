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
import { ThemeProvider, withStyles, createMuiTheme } from "@material-ui/core";

//--------------------------------------------

const FormUpdateActivity = (props) => {
  const classes = useFormStyles();
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
          borderRadius: "10px",
        },
        "&:hover fieldset": {
          borderColor: "#55a1e3",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#55a1e3",
        },
        "& .MuiOutlinedInput-input": {
          padding: "15px 20px 15px",
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
        <h1 className={classes.title}>Atualizar Nome</h1>
        <CssTextField
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
