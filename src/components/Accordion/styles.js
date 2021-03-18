import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  & h2 {
    margin: 15px 0;
  }
`;

export const Title = styled.h2`
  width: 100%;
  text-align: center;
`;

export const Tags = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 900px) {
    flex-direction: row;
    justify-content: space-around;
  }

  & div {
    margin-bottom: 10px;
    padding: 5px;
    display: block;
    width: 100%;
    margin: auto;
    & h4 {
      margin-bottom: 10px;
    }

    & span {
      background: #55a1e3;
      font-weight: bold;
      padding: 10px;
      border-radius: 10px;
      :25px ;
      display: block;
      width: 100%;
      margin: auto;
    }
  }
`;
