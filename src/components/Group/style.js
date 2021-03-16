import styled from "styled-components";

export const GroupContent = styled.div``;
export const ActivitiesCard = styled.div`
  padding: 5px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: 15px;
  background-color: #55a1e3;
  border-radius: 15px;
  & h2 {
    color: #eff7fe;
    width: 85%;
  }
  @media (max-width: 445px) {
    width: 100%;
  }
`;
export const ActivityCard = styled.div`
  background-color: #363b45;
  margin: 1rem;
  padding: 5px;
  color: #eff7fe;
  width: 80%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 445px) {
    width: 100%;
  }
`;

export const ActivityAdd = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const CardGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border: 2px solid white;
  background: #16181c;
  border-radius: 25px;
  text-align: center;
  & h1 {
    color: #55a1e3;
  }
  & h4 {
    color: #eff7fe;
  }
`;

export const CategoryBox = styled.div`
  min-width: 50px;
  padding: 0.2rem;
  border-radius: 15px;
  background-color: #55a1e3;
`;

export const ButtonsContent = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Goals = styled.div`
  padding: 5px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: 15px;
  background-color: #55a1e3;
  border-radius: 15px;
  & h2 {
    color: #eff7fe;
    width: 85%;
  }
  @media (max-width: 445px) {
    width: 100%;
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
  margin: 1rem;
  padding: 5px;
  color: #eff7fe;
  width: 80%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  width: 50%;
  margin: 15px;
  background-color: #55a1e3;
  border-radius: 15px;
  & h2 {
    color: #eff7fe;
    width: 85%;
  }
  @media (max-width: 445px) {
    width: 100%;
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
