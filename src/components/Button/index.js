import { ButtonStyled } from "./styles";

const Button = ({ styled, children, size }) => {
  return (
    <ButtonStyled styled={styled} size={size}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
