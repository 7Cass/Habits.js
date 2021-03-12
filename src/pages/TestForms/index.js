// material ui
import { Box } from "@material-ui/core";

// react router dom
import { useHistory } from "react-router-dom";

// components
import FormUpdateHabit from "../../components/FormUpdateHabit";
import DeleteHabit from "../../components/DeleteHabit";
import ModalCreateHabit from "../../components/ModalCreateHabit";

//-------------------------------------
const TestForms = () => {
  const history = useHistory();
  return (
    <Box display="flex" flexWrap="wrap">
      <FormUpdateHabit id={34} />
      <DeleteHabit />
      <button onClick={() => history.push("/group")}>Para group</button>
      <ModalCreateHabit />
    </Box>
  );
};

export default TestForms;
