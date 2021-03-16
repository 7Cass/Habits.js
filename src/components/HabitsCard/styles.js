import styled from "styled-components";

export const Card = styled.section`
  background: #55a1e3;
  padding: 20px 10px;
  border: none;
  border-radius: 25px;
  text-align: center;
  height: 500px;
  overflow-y: scroll;
  @media screen and (min-width: 600px) {
    margin-right: 15px;
  }
  @media screen and (min-width: 700px) {
    width: 100%;
    margin-right: 40px;
  }
`;
