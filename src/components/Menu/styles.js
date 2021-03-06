import styled from "styled-components";

export const SectionMenu = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 30px 0;
`;

export const MenuItem = styled.button`
  font-family: "Montserrat";
  font-size: 1.5rem;
  color: #eff7fe;
  background: transparent;
  border: none;
  font-weight: bold;
  margin: 0 10px;
  cursor: pointer;
  outline: none;

  @media (max-width: 374px) {
    font-size: 1.2rem;
  }

  & i {
    display: none;

    @media screen and (min-width: 425px) {
      display: inline;
      margin: 0 5px;
    }
  }
`;
