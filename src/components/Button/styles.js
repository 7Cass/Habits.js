import styled from "styled-components";

export const ButtonStyled = styled.button`
  color: ${(props) =>
    props.type === "outlined"
      ? "red"
      : props.type === "filled"
      ? "blue"
      : null};
`;
