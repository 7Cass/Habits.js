import styled from "styled-components";

export const CardGroup = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  background-color: #16181c;
  width: 250px;
  height: 200px;
  margin: 10px;
  padding: 10px;
`;

export const UsersContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: space-around;
`;
export const ButtonsContent = styled.div`
  display: flex;

  & h3 {
    margin: 0px 15px;
  }
`;
