// material ui
import { Box } from "@material-ui/core";
// components
import FormUpdateHabit from "../../components/FormUpdateHabit";
import CreateHabitForm from "../../components/CreateHabitForm";
import DeleteHabit from "../../components/DeleteHabit";
//-------------------------------------
const TestForms = () => {
  return (
    <Box display="flex" flexWrap="wrap">
      <FormUpdateHabit id={34} />
      <CreateHabitForm />
      <DeleteHabit />
    </Box>
  );
};

export default TestForms;
