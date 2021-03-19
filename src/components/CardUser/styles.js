import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  background-color: #16181c;
  width: 230px;
  height: 250px;
  margin: 0.5rem;
  padding: 0.5rem;
`;

export const Name = styled.div`
  padding: 5px;
  color: #55a1e3;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Description = styled.div`
  padding: 0.5rem;
  width: 100%;
  word-wrap: break-word;
  color: #eff7fe;
  font-size: 1rem;
  font-weight: bold;
`;
