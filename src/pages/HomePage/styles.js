import styled from "styled-components";

export const PrincipalDiv = styled.div`
  height: 100%;
`;

export const Container = styled.div`
  padding: 0 20px;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 675px) {
    flex-direction: row;
    align-items: inherit;
    padding: 25px;
    height: 550px;
  }
  @media screen and (min-width: 800px) {
    padding: 0 50px;
  }
`;

export const DevelopedBy = styled.h2`
  font-size: 1.25rem;
  text-align: center;
  margin: 25px 0;
  & span {
    color: #55a1e3;
    cursor: pointer;
    @media screen and (max-width: 992px) {
      margin: 0;
      padding-bottom: 50px;
    }
  }
`;
