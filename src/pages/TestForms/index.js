// components
import FormUpdateHabit from "../../components/FormUpdateHabit";
import CreateHabitForm from "../../components/CreateHabitForm";
//-------------------------------------
//-------------------------------------
import { useHistory } from "react-router-dom";
//-------------------------------------
const TestForms = () => {
  const history = useHistory();
  return (
    <>
      <FormUpdateHabit id={34} />
      <CreateHabitForm />
      <button onClick={() => history.push("/group")}>Para group</button>
    </>
  );
};

export default TestForms;
