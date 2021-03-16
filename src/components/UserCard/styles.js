import styled from "styled-components";

export const Card = styled.div`
  background: #55a1e3;
  padding: 20px 10px;
  border: none;
  border-radius: 25px;
  min-width: 270px;
  max-width: 300px;
  text-align: center;
  margin-bottom: 15px;

  & h2,
  h4 {
    margin: 10px;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 150px;
`;

export const GroupCard = styled.div`
  border: 3px solid #16181c;
  border-radius: 25px;
  padding: 15px 25px;
  margin: 10px 0;
  & h3 {
    color: #16181c;
    font-weight: 700;
  }
  & h2 {
    background: #16181c;
    padding: 10px;
    border-radius: 25px;
  }
  & i {
    color: #eff7fe;
    margin-right: 5px;
  }
`;
