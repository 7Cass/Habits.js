import { Card, Title } from "./styles";

import SimpleAccordion from "../Accordion";
import ModalCreateHabit from "../ModalCreateHabit";

import { useChecked } from "../../providers/user/index";

//----------------------------------------
const HabitsCard = () => {
  const { habits } = useChecked();
  return (
    <Card className="area">
      <Title>Seus hábitos</Title>
      <ModalCreateHabit />
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
            id={habit.id}
          ></SimpleAccordion>
        ))}
    </Card>
  );
};

export default HabitsCard;
