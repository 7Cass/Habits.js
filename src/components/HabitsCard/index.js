import { Card } from "./styles";
import { useEffect, useState } from "react";
import API from "../../services";

import { getPersonalHabit } from "../../helper/habits";

import { useChecked } from "../../providers/user";

//----------------------------------------
const HabitsCard = () => {
  const { isChecked } = useChecked();
  const [habits, setHabits] = useState([]);
  const [token] = useState(() => {
    const Token = isChecked
      ? localStorage.getItem("token") || ""
      : sessionStorage.getItem("token") || "";

    if (!Token) {
      return "";
    }
    return JSON.parse(Token);
  });

  const getUser = async () => {
    try {
      const response = await API.get(getPersonalHabit(), {
        headers: { Authorization: `Bearer ${token}` },
      });

      setHabits(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, []);

  console.log(habits);

  return (
    <Card>
      {/*
       {habits &&
        habits.map((habit, index) => (
          <div
            key={index}
            achieved={habit.achieved}
            category={habit.category}
            difficulty={habit.difficulty}
            frequency={habit.frequency}
            how_much_achieved={habit.how_much_achieved}
            title={habit.title}
          ></div>
        ))} */}
    </Card>
  );
};

export default HabitsCard;
