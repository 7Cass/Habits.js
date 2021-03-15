// component
import FormRegister from "../../components/FormRegister";

// material ui
import { Grid, Typography } from "@material-ui/core";

// styles
import { usePageRegister } from "../../styles/makeStyles";
//--------------------------------------------

//--------------------------------------------
const Register = () => {
  const classes = usePageRegister();
  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      <Grid container spacing={2}>
        <Grid item container xs={12}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}></Grid>
        </Grid>
        <Grid item container xs={12}>
          <Grid className={classes.formStyle} item xs={4}>
            <Typography variant="h4">Cadastro</Typography>
            <FormRegister />
          </Grid>
          <Grid className={classes.registerBg} item xs={8}></Grid>
        </Grid>
        <Grid item container xs={12}>
          <Grid className={classes.circlesBg} item xs={4}></Grid>
          <Grid className={classes.devStyle} item xs={4}>
            <Typography variant="h5">Desenvolvido por Squad1</Typography>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Register;
