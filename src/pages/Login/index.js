import FormLogin from "../../components/FormLogin";

import Image from "../../assets/login/login.svg";

import { Container } from "./styles";

const Login = () => {
  return (
    <Container>
      <h1>Habits.js</h1>
      <div className="inner-container">
        <img src={Image} alt="Imagem Lateral" />
        <FormLogin />
      </div>
      <h3>
        Developed by <span>Squad1</span>
      </h3>
    </Container>
  );
};

export default Login;
