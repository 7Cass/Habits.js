// material ui
import { makeStyles } from "@material-ui/core/styles";

//------------------------------------------------
const useStyles = makeStyles((theme) => ({
  formStyles: {},
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

export default useStyles;
