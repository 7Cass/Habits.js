import { ButtonStyled } from "./styles";

const Button = ({ type, children }) => {
  return <ButtonStyled type={type}>{children}</ButtonStyled>;
};

export default Button;

// color, size and children
