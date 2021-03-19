import styled from "styled-components";

export const ButtonStyled = styled.button`
  border: 3px solid;
  border-color: ${(props) =>
    props.styled === "outlined" || props.styled === "filled"
      ? "#16181C"
      : props.styled === "outlined-light" || props.styled === "filled-light"
      ? "#EFF7FE"
      : null};
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  transition: 0.4s;
  color: ${(props) =>
    props.styled === "outlined" || props.styled === "filled-light"
      ? "#16181C"
      : props.styled === "filled" || props.styled === "outlined-light"
      ? "#EFF7FE"
      : null};
  background: ${(props) =>
    props.styled === "outlined" || props.styled === "outlined-light"
      ? "transparent"
      : props.styled === "filled"
      ? "#16181C"
      : props.styled === "filled-light"
      ? "#eff7fe"
      : null};
  width: ${(props) =>
    props.size === "small" ? "135px" : props.size === "large" ? "100%" : null};
  padding: 15px;

  &:hover {
    background: ${(props) =>
      props.styled === "outlined"
        ? "#16181C"
        : props.styled === "outlined-light"
        ? "#eff7fe"
        : props.styled === "filled" || props.styled === "filled-light"
        ? "transparent"
        : null};
    color: ${(props) =>
      props.styled === "outlined" || props.styled === "filled-light"
        ? "#EFF7FE"
        : props.styled === "filled" || props.styled === "outlined-light"
        ? "#16181C"
        : null};
  }
`;
