import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  text-align: center;
  background-color: #55a1e3;
  border-radius: 10px;
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
    max-width: 1150px;
    width: 90%;
  }
`;
export const UsersContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: space-around;
`;
