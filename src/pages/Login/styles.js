import styled from "styled-components";
import BackgroundImage from "../../assets/wave_bg.svg";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  padding: 2rem;

  display: flex;
  flex-direction: column;

  justify-content: space-around;
  text-align: center;

  @media screen and (min-width: 1100px) {
    background-image: url(${BackgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  & img {
    display: none;
  }

  & h1 {
    font-weight: 600;
    font-size: 3rem;
  }

  & h2 {
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 1.5;
  }

  & h3 {
    font-size: 1.25rem;
    @media screen and (max-width: 1100px) {
      margin-top: 20px;
    }
  }

  & h3 span {
    color: #16181c;
    cursor: pointer;
    @media screen and (max-width: 1100px) {
      color: #55a1e3;
    }
  }

  & button {
    padding: 1rem 0;
    margin: 0.5rem 0;
  }

  & p {
    padding: 1rem 0;
    text-align: left;

    @media screen and (max-width: 1100px) {
      text-align: center;
    }
  }

  & p a {
    color: #55a1e3;
    @media screen and (max-width: 400px) {
      display: block;
    }
  }

  @media screen and (min-width: 400px) {
    form {
      min-width: 85%;
      align-self: center;
    }

    & h3 {
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 800px) {
    & div.inner-container {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 2rem;
      justify-items: center;
      align-items: center;
    }

    & .form-container {
      max-width: 500px;
      width: 100%;
    }

    img {
      display: block;
      max-width: 90%;
      max-height: 90%;
    }

    form h2 {
      padding-bottom: 1rem;
    }
  }
`;
