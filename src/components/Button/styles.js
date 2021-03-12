import styled from "styled-components";

export const ButtonStyled = styled.button`
  border: 5px solid #16181c;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  transition: 0.4s;
  color: ${(props) =>
    props.styled === "outlined"
      ? "#16181C"
      : props.styled === "filled"
      ? "#EFF7FE"
      : null};
  background: ${(props) =>
    props.styled === "outlined"
      ? "transparent"
      : props.styled === "filled"
      ? "#16181C"
      : null};
  width: ${(props) =>
    props.size === "small" ? "125px" : props.size === "large" ? "100%" : null};
  padding: 15px;
  &:hover {
    background: ${(props) =>
      props.styled === "outlined"
        ? "#16181C"
        : props.styled === "filled"
        ? "transparent"
        : null};
    color: ${(props) =>
      props.styled === "outlined"
        ? "#EFF7FE"
        : props.styled === "filled"
        ? "#16181C"
        : null};
  }
`;
