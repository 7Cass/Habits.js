import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  text-align: center;
  background-color: #55a1e3;
  border-radius: 15px;
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;

  @media screen and (min-width: 600px) {
    flex-flow: row wrap;
    justify-content: space-evenly;
    max-width: 580px;
    width: 95%;
  }

  @media screen and (min-width: 800px) {
    flex-flow: row wrap;
    justify-content: space-evenly;
    max-width: 1200px;
    width: 90%;
  }
`;
