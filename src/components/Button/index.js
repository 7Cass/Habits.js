import { ButtonStyled } from "./styles";

const Button = ({ type, children, size }) => {
  return (
    <ButtonStyled type={type} size={size}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
