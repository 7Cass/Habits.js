import { ButtonStyled } from "./styles";

const Button = ({ styled, children, size, onClick }) => {
  return (
    <ButtonStyled styled={styled} size={size} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
