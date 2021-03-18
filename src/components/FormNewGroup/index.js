// API
import API from "../../services";

// material ui
import { TextField, FormControl } from "@material-ui/core";
import { ThemeProvider, withStyles, createMuiTheme } from "@material-ui/core";

import Button from "../Button";

// react hook form + yup + resolvers
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// providers
import { useChecked } from "../../providers/user";
//--------------------------------------------
import { postCreateGroup, postSubscribeGroup } from "../../helper/groups";
import { schemaNewGroup } from "../../helper/formValidation";
import { getOneGroup } from "../../helper/groups";

//--------------------------------------------
const FormNewGroup = () => {
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schemaNewGroup),
  });
  const { token, setGroup, isChecked } = useChecked();

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

      isChecked
        ? localStorage.setItem("userGroup", JSON.stringify(takeUserGroup.data))
        : sessionStorage.setItem(
            "userGroup",
            JSON.stringify(takeUserGroup.data)
          );

      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const CssTextField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: "#55a1e3",
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
      text: {
        primary: "#55a1e3",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <FormControl component="form" onSubmit={handleSubmit(onRegister)}>
        <CssTextField
          name="name"
          label="Nome do Grupo"
          variant="outlined"
          size="small"
          margin="dense"
          inputRef={register}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <CssTextField
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
        />
        <CssTextField
          name="category"
          label="Categoria"
          variant="outlined"
          size="small"
          margin="dense"
          inputRef={register}
          error={!!errors.category}
          helperText={errors.category?.message}
        />
        <Button type="submit" size="large" styled="outlined-light">
          Criar Grupo
        </Button>
      </FormControl>
    </ThemeProvider>
  );
};

export default FormNewGroup;
