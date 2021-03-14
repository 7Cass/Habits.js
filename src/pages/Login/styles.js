import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  padding: 0 2rem;

  display: flex;
  flex-direction: column;

  justify-content: space-around;
  text-align: center;

  & form * {
  }

  & img {
    display: none;
  }

  & h1 {
    font-size: 4rem;
    font-weight: 600;
  }

  & h2 {
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 1.5;
  }

  & button {
    padding: 1rem 0;
    margin: 0.5rem 0;
  }

  & p {
    padding: 1rem 0;
    text-align: left;
  }

  @media screen and (min-width: 400px) {
    form {
      min-width: 85%;
      align-self: center;
    }
  }

  @media screen and (min-width: 800px) {
    & div.inner-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 3rem;
      justify-items: center;
    }

    img {
      display: block;
      max-width: 95%;
      max-height: 95%;
    }

    form {
      max-width: 400px;
    }

    form h2 {
      padding-bottom: 1rem;
    }
  }
`;
