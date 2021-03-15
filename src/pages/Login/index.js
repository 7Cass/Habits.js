import FormLogin from "../../components/FormLogin";

import Image from "../../assets/login/login.svg";

import { Container } from "./styles";

import { useEffect } from "react";
import { useChecked } from "../../providers/user";
import { Redirect } from "react-router";

const Login = () => {
  const { isAuth, checkAuth } = useChecked();

  useEffect(() => {
    checkAuth();
    //eslint-disable-next-line
  }, []);

  return (
    <>
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
            Developed by <span>Squad1</span>
          </h3>
        </Container>
      )}
    </>
  );
};

export default Login;
