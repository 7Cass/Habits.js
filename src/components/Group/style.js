import styled from "styled-components";

export const GroupContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const CardGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 670px;
  align-items: center;
  padding: 15px;
  background: #16181c;
  border-radius: 10px;
  text-align: center;
  height: 100vh;
  & h1 {
    color: #55a1e3;
    margin-right: 0.5rem;
  }
  & h4 {
    color: #eff7fe;
    font-size: 1.3rem;
  }
`;

export const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  & h1 {
    margin: 5px;
  }
`;

export const ActivitiesCard = styled.div`
  overflow-y: scroll;
  padding: 5px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 38vh;
  max-width: 640px;
  margin: 5px;
  background-color: #55a1e3;
  border-radius: 10px;
  & h2 {
    color: #eff7fe;
    width: 85%;
  }
  & h3 {
    max-width: 500px;
    width: 100%;
  }
`;
export const ActivityCard = styled.div`
  background-color: #363b45;
  margin: 0.5rem;
  padding: 5px;
  color: #eff7fe;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;

  & h3 {
    text-align: center;
    font-size: 1.25rem;
    margin: 5px 20px;
    width: auto;
  }

  & h4 {
    text-align: center;
    font-size: 1.25rem;
    margin: 5px;
    @media screen and (min-width: 500px) {
      margin: auto 20px;
    }
  }

  @media screen and (min-width: 425px) {
    flex-direction: row;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    font-size: 1.5rem;
  }
`;

export const ActivityAdd = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0 5px;
`;

export const CategoryBox = styled.div`
  min-width: 50px;
  margin: 0.5rem;
  padding: 0.7rem;
  font-size: 1.4rem;
  border-radius: 10px;
  background-color: #55a1e3;
`;

export const ButtonsContent = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 425px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const Goals = styled.div`
  overflow-y: scroll;
  padding: 5px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 34vh;
  max-width: 640px;
  margin: 5px;
  background-color: #55a1e3;
  border-radius: 10px;
  & h2 {
    color: #eff7fe;
    width: 85%;
  }
`;
export const GoalsAdd = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0 5px;
`;

export const GoalCard = styled.div`
  background-color: #363b45;
  margin: 0.5rem;
  padding: 5px;
  color: #eff7fe;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;

  & .goal-container {
    display: flex;
    align-items: center;
  }

  & h3 {
    text-align: center;
    font-size: 1.25rem;
    margin: 5px 20px;
    width: auto;
  }

  @media screen and (min-width: 425px) {
    flex-direction: row;
  }
`;

export const UserCard = styled.div`
  align-items: center;
  padding: 5px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 20vh;
  max-width: 640px;
  margin: 5px;
  background-color: #55a1e3;
  border-radius: 10px;
  & h2 {
    color: #eff7fe;
    width: 85%;
  }
`;
export const Users = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0 5px;
`;

export const UsersContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`;
