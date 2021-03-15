import styled from "styled-components";
import waveBg from "../../assets/wave_bg.svg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding: 0 2rem;

  display: flex;
  flex-direction: column;

  justify-content: space-around;
  text-align: center;

  background-image: url(${waveBg});
  background-repeat: no-repeat;
  background-size: cover;

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
    background-image: none;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;

    & div.inner-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 3rem;
      justify-items: center;

      & div.form-container {
        width: 100%;
      }
    }

    & div.header-container {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0.5rem 0 1rem 0;
      position: relative;
      min-height: 150px;
      height: 100%;

      & div.bgCircles1-container {
        position: absolute;
        right: 20px;
      }
    }

    & div.footer-container {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      min-height: 150px;
      height: 100%;
      margin: 1rem 0 0.5rem 0;
      position: relative;

      & div.bgCircles2-container {
        position: absolute;
        left: 40px;
        max-width: 220px;
        width: 100%;
      }
    }

    h1 {
      font-size: 2.5rem;
    }

    h3 {
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
  } ;
`;
