import styled from "styled-components";

import background from "../../assets/wave_bg.svg";

export const Card = styled.div`
  height: 20vw;
  width: 100%;
  background-image: url(${background});
  background-size: cover;
  background-position: bottom;
  position: absolute;
  z-index: -1;
  top: 90%;

  @media screen and (max-width: 1092px) {
    top: 100%;
  }

  @media screen and (max-width: 992px) {
    display: none;
  }
`;
