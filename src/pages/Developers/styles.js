import styled from "styled-components";

// background svg
import wave_bg from "../../assets/wave_bg.svg";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 1.5rem;
  }

  footer {
    margin: 2rem 0;
    h2 {
      font-size: 1.25rem;
    }

    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 1rem 0;
    }
  }

  @media screen and (min-width: 800px) {
    /* background-image: url(${wave_bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; */
  }
`;

export const BackContainer = styled.div`
  justify-self: center;
  background: #55a1e3;
  border-radius: 15px;
  padding: 0.5rem;
  margin: 1rem 0;
  font-weight: 700;
  font-size: 1.25rem;
  & a {
    color: #eff7fe;
    text-decoration: none;
    & span {
      color: #16181c;
    }
  }
`;

export const UserCard = styled.div`
  background: #55a1e3;
  color: #16181c;
  width: 90%;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:nth-child(even) {
    flex-direction: row-reverse;

    img {
      margin-left: 0.5rem;
    }
  }

  & img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin-right: 0.5rem;
  }

  @media screen and (min-width: 800px) {
    max-width: 35rem;
    transition: all 0.4s ease-in-out;

    &:hover {
      background: #eff7fe;
      color: #55a1e3;

      a {
        color: #55a1e3;
      }
    }

    img {
      width: 128px;
      height: 128px;
    }
  }
`;

export const UserDetails = styled.div`
  text-align: center;
  h3 {
    font-weight: 700;
  }

  p {
    font-weight: 700;
  }

  div {
    display: flex;
    justify-content: space-evenly;
    margin: 0.25rem 0;

    a {
      transition: all 0.4s ease-in-out;

      text-decoration: none;
      color: #16181c;
    }
  }
  @media screen and (min-width: 800px) {
    h3 {
      font-size: 1.75rem;
    }

    div img {
    }
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;

  justify-content: center;
  align-content: center;

  @media screen and (min-width: 800px) {
    margin: 2rem 0;
  }
`;
