// material ui
import { Box } from "@material-ui/core";
// components
import FormUpdateHabit from "../../components/FormUpdateHabit";
import CreateHabitForm from "../../components/CreateHabitForm";
import DeleteHabit from "../../components/DeleteHabit";
//-------------------------------------
//-------------------------------------
import { useHistory } from "react-router-dom";
//-------------------------------------
const TestForms = () => {
  const history = useHistory();
  return (
    <Box display="flex" flexWrap="wrap">
      <FormUpdateHabit id={34} />
      <CreateHabitForm />
      <DeleteHabit />
      <button onClick={() => history.push("/group")}>Para group</button>
    </Box>
  );
};

export default TestForms;
