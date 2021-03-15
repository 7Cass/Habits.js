import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;

  & h2 {
    margin: 15px 0;
  }
`;

export const Tags = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & div {
    background: #55a1e3;
    font-weight: bold;
    padding: 5px;
    border-radius: 25px;
    margin: 10px 0;
  }
`;
