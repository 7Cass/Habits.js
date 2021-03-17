import styled from "styled-components";

export const GroupContent = styled.div`
  display: flex;
  justify-content: center;
  width: 85%;
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
  border-radius: 25px;
  text-align: center;
  height: 100vh;
  & h1 {
    color: #55a1e3;
    margin-right: 0.5rem;
  }
  & h4 {
    color: #eff7fe;
  }
`;

export const TitleContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
  margin: 15px;
  background-color: #55a1e3;
  border-radius: 15px;
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
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ActivityAdd = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const CategoryBox = styled.div`
  min-width: 50px;
  margin-top: 0.5rem;
  padding: 0.2rem;
  border-radius: 15px;
  background-color: #55a1e3;
`;

export const ButtonsContent = styled.div`
  display: flex;
  flex-direction: row;
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
  margin: 15px;
  background-color: #55a1e3;
  border-radius: 15px;
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
`;

export const GoalCard = styled.div`
  background-color: #363b45;
  margin: 0.5rem;
  padding: 5px;
  color: #eff7fe;
  width: 100%;
  height: 33px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .goal-container {
    display: flex;
    align-items: center;
  }
  @media (max-width: 445px) {
    width: 100%;
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
  margin: 15px;
  background-color: #55a1e3;
  border-radius: 15px;
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
`;

export const UsersContent = styled.div`
  display: flex;
  justify-content: space-around;
`;
