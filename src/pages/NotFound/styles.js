import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  & div {
    text-align: center;
    background: #55a1e3;
    padding: 0.25rem;
    border-radius: 10px;
    color: #eff7fe;
  }

  & img {
    width: 90%;
    padding: 2rem;
  }

  & h1 {
    font-size: 1.75rem;
  }

  & h2 {
    margin: 1rem 0;
    padding: 0.25rem;
  }

  & a {
    color: #16181c;
    text-decoration: none;
  }

  @media screen and (min-width: 600px) {
    & img {
      max-width: 50%;
      max-height: 50%;
    }

    & h1 {
      font-size: 3rem;
    }

    & h2 {
      font-size: 2.5rem;
    }
  }

  @media screen and (min-width: 1000px) {
    & img {
      max-width: 50%;
      max-height: 50%;
    }

    & h1 {
      font-size: 3rem;
    }

    & h2 {
      font-size: 2rem;
    }
  }
`;
