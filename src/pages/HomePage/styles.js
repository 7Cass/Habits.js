import styled from "styled-components";

export const Container = styled.div`
  padding: 0 20px;
  height: 100%;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 600px) {
    flex-direction: row;
    align-items: inherit;
    padding: 25px;
  }
  @media screen and (min-width: 800px) {
    padding: 0 50px;
  }
`;

export const DevelopedBy = styled.h2`
  font-size: 1.25rem;
  text-align: center;
  margin: 50px 0;
  & span {
    color: #55a1e3;
    cursor: pointer;
  }
`;
