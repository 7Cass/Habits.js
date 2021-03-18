// react
import { useEffect } from "react";

// component
import FormRegister from "../../components/FormRegister";

// provider
import { useChecked } from "../../providers/user";

// react router dom
import { Redirect, useHistory } from "react-router";

// styles components
import { Container } from "./styles";

// assets
import registerBg from "../../assets/register/register.svg";
import bgCircles1 from "../../assets/bg_circles1.svg";
import bgCircles2 from "../../assets/bg_circles2.svg";
//--------------------------------------------

//--------------------------------------------
const Register = () => {
  const history = useHistory();
  const { isAuth, checkAuth } = useChecked();

  useEffect(() => {
    checkAuth();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      {!isAuth ? (
        <Container>
          <div className="header-container">
            <div className="title-container">
              <h1>Habits.js</h1>
            </div>
            <div className="bgCircles1-container">
              <img src={bgCircles2} alt="circle 1" />
            </div>
          </div>
          <div className="inner-container">
            <div className="form-container">
              <FormRegister />
            </div>
            <div className="registerBg-container">
              <img src={registerBg} alt="register Bg" />
            </div>
          </div>
          <div className="footer-container">
            <div className="bgCircles2-container">
              <img src={bgCircles1} alt="circle 2" />
            </div>
            <div className="dev-container">
              <h3>
                Developed by
                <span onClick={() => history.push("/developers")}>
                  {" "}
                  Squad 1
                </span>
              </h3>
            </div>
          </div>
        </Container>
      ) : (
        <Redirect to={"/homepage"} />
      )}
    </>
  );
};

export default Register;
