// material ui
import { makeStyles } from "@material-ui/core/styles";

// assets
import registerBg from "../../assets/register/register.svg";
import bgCircles1 from "../../assets/bg_circles1.svg";
import bgCircles2 from "../../assets/bg_circles2.svg";

//------------------------------------------------
export const useModalUserGroup = makeStyles((theme) => ({
  paperStyles1: {
    position: "absolute",
    width: "fit-content",
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: "transparente",
    // border: "2px solid #000",
    // boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    justifyContent: "space-around",
    outline: "none",
    // eslint-disable-next-line
    // ["@media (min-width:450px)"]: {
    //   width: 400,
    // },
  },
}));

export const useModalStyles = makeStyles((theme) => ({
  paperStyles: {
    position: "absolute",
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    justifyContent: "space-around",
    // eslint-disable-next-line
    ["@media (min-width:450px)"]: {
      width: 400,
    },
  },
}));

export const useFormStyles = makeStyles((theme) => ({
  inputStyles: {
    margin: "10px 0",
    "& .MuiInputBase-root": {
      color: "#eff7fe",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#eff7fe",
    },
    "& .fieldset.PrivateNotchedOutline-root-8.MuiOutlinedInput-notchedOutline": {
      borderColor: "#55a1e3",
    },
    "& .MuiFormLabel-root": {
      color: "#eff7fe",
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: "#55a1e3",
    },
  },
}));

export const usePageRegister = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    width: "90%",
    margin: "0 auto",
  },
  registerBg: {
    width: "100%",
    minHeight: "500px",
    height: "100%",
    backgroundImage: `url(${registerBg})`,
    backgroundRepeat: "no-repeat",
  },
  circlesBg1: {
    width: "100%",
    minWidth: "340px",
    minHeight: "225px",
    height: "100%",
    margin: "0 auto",
    backgroundImage: `url(${bgCircles1})`,
    backgroundRepeat: "no-repeat",
  },
  circlesBg2: {
    width: "100%",
    minWidth: "340px",
    minHeight: "225px",
    height: "100%",
    margin: "0 auto",
    backgroundImage: `url(${bgCircles2})`,
    backgroundRepeat: "no-repeat",
  },
  formStyle: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  devStyle: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

export const SliderStyles = makeStyles((theme) => ({
  slider: {
    color: "#55a1e3",
    margin: 0,
  },
  removeButton: {
    color: "#BA3B4E",
    border: "3px solid",
    borderColor: "#BA3B4E",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "1.2rem",
    fontWeight: "600",
    borderRadius: "10px",
    outline: "none",
    cursor: "pointer",
    transition: "0.4s",
    background: "transparent",
    width: "100%",
    padding: "15px",
    marginTop: "10px",

    "&:hover": {
      background: "#BA3B4E",
      color: "#16181C",
    },

    "& i": {
      marginRight: "5px",
    },
  },
}));

export const useAcitivityButtons = makeStyles((theme) => ({
  buttonStyle: {
    margin: "0 5px",
  },
}));
