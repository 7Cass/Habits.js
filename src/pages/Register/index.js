// component
import FormRegister from "../../components/FormRegister";

// material ui
import { Grid, Typography } from "@material-ui/core";

// styles
import { usePageRegister } from "../../styles/makeStyles";

// assets
import registerBg from "../../assets/register/register.svg";
import bgCircles1 from "../../assets/bg_circles1.svg";
import bgCircles2 from "../../assets/bg_circles2.svg";
//--------------------------------------------

//--------------------------------------------
const Register = () => {
  const classes = usePageRegister();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item container xs={12}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Typography variant="h3">Habits.js</Typography>
          </Grid>
          <Grid item xs={4}>
            <div>
              <img src={bgCircles2} alt="Círculos 2" />
            </div>
          </Grid>
        </Grid>
        <Grid item container xs={12}>
          <Grid className={classes.formStyle} item xs={4}>
            <div className={classes.formStyle}>
              <Typography variant="h4">Cadastro</Typography>
              <FormRegister />
            </div>
          </Grid>
          <Grid item xs={8}>
            <div>
              <img src={registerBg} alt="Register" />
            </div>
          </Grid>
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={4}>
            <div>
              <img src={bgCircles1} alt="Círculos 1" />
            </div>
          </Grid>
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
