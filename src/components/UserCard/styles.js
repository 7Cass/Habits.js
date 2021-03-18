import styled from "styled-components";

export const Card = styled.div`
  background: #55a1e3;
  padding: 20px 10px;
  border: none;
  border-radius: 10px;
  min-width: 280px;
  max-width: 300px;
  text-align: center;
  margin-bottom: 15px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & h2,
  h4 {
    margin: 1.5rem;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 150px;
  margin: auto;
`;

export const GroupCard = styled.div`
  border: 3px solid #16181c;
  border-radius: 10px;
  padding: 15px 25px;
  & h3 {
    color: #16181c;
    font-weight: 700;
  }
  & h2 {
    background: #16181c;
    padding: 10px;
    border-radius: 10px;
  }
  & i {
    color: #eff7fe;
    margin-right: 5px;
  }
`;
