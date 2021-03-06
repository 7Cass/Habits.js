import styled from "styled-components";

export const PrincipalDiv = styled.div`
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  text-align: center;
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem;

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

export const GroupContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  max-width: 960px;
  justify-content: space-around;
  background-color: #55a1e3;
  border-radius: 10px;
  padding: 0.5rem;
`;

export const SectionMenu = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-basis: 100%;
  margin: 0 0 0.5rem 0;
`;

export const MenuItem = styled.button`
  font-family: "Montserrat";
  font-size: 1rem;
  color: #eff7fe;
  background: transparent;
  border: none;
  width: 30px;
  text-align: center;
  font-weight: bold;
  margin: 0 0.5rem;
  cursor: pointer;
  outline: none;
`;
