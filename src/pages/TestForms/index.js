// components
import FormUpdateHabit from "../../components/FormUpdateHabit";
import ModalCreateHabit from "../../components/ModalCreateHabit";
//-------------------------------------
//-------------------------------------
import { useHistory } from "react-router-dom";
//-------------------------------------
const TestForms = () => {
  const history = useHistory();
  return (
    <>
      <FormUpdateHabit id={34} />
      <button onClick={() => history.push("/group")}>Para group</button>
    </>
  );
};

export default TestForms;
