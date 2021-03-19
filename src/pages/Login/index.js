// react
import { useEffect } from "react";

// components
import FormLogin from "../../components/FormLogin";

// assets
import Image from "../../assets/login/login.svg";

// styles
import { Container } from "./styles";

// provider
import { useChecked } from "../../providers/user";

// react router dom
import { Redirect, useHistory } from "react-router";

// motion
import { motion } from "framer-motion";

// ------------------------------------------------------
const Login = () => {
  const history = useHistory();
  const { isAuth, checkAuth } = useChecked();

  useEffect(() => {
    checkAuth();
    //eslint-disable-next-line
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {isAuth ? (
        <Redirect to={"/homepage"} />
      ) : (
        <Container>
          <h1>Habits.js</h1>
          <div className="inner-container">
            <div className="image-container">
              <img src={Image} alt="Imagem Lateral" />
            </div>
            <div className="form-container">
              <FormLogin />
            </div>
          </div>
          <h3>
            Developed by
            <span onClick={() => history.push("/developers")}> Squad 1</span>
          </h3>
        </Container>
      )}
    </motion.div>
  );
};

export default Login;
