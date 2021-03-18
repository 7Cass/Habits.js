import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  text-align: center;
  background-color: #55a1e3;
  border-radius: 10px;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;

export const GroupContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  text-align: center;
  background-color: #55a1e3;
  border-radius: 10px;
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
  padding: 10px;

  h1 {
    flex-basis: 100%;
    margin: 0 0 10px 0;
  }

  @media screen and (min-width: 600px) {
    flex-flow: row wrap;
    justify-content: space-evenly;
    max-width: 580px;
    width: 95%;
  }

  @media screen and (min-width: 800px) {
    flex-flow: row wrap;
    justify-content: space-evenly;
    max-width: 1400px;
    width: 95%;
  }
`;

export const SectionMenu = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-basis: 100%;
  margin: 0 0 5px 0;
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
  margin: 0 15px;
  cursor: pointer;
  outline: none;
`;
