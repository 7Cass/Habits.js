import { Card, Accordion } from "./styles";
import { useEffect, useState } from "react";
import SimpleAccordion from "../Accordion";

import { useChecked } from "../../providers/user/index";

import API from "../../services";

import { getPersonalHabit } from "../../helper/habits";

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
      <h2>Seus hábitos</h2>
      {habits &&
        habits.map((habit, index) => (
          <SimpleAccordion
            key={index}
            achieved={habit.achieved}
            category={habit.category}
            difficulty={habit.difficulty}
            frequency={habit.frequency}
            how_much_achieved={habit.how_much_achieved}
            title={habit.title}
          ></SimpleAccordion>
        ))}
    </Card>
  );
};

export default HabitsCard;
