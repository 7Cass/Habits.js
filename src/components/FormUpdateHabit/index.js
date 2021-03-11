// API
import API from "../../services";

// react
import { useState } from "react";

// material ui
import {
  Typography,
  Box,
  Button,
  FormControlLabel,
  Checkbox,
  Slider,
} from "@material-ui/core";

// global state
import { useChecked } from "../../providers/user";

// helper
import { patchUpdateHabit } from "../../helper/habits";
//--------------------------------------------

//--------------------------------------------
const FormUpdateHabit = ({ id }) => {
  const [isAchieved, setIsAchieved] = useState(false);
  const [slider, setSlider] = useState(0);
  const { isChecked } = useChecked();
  const [token] = useState(() => {
    const Token = isChecked
      ? localStorage.getItem("token") || ""
      : sessionStorage.getItem("token") || "";

    if (!Token) {
      return "";
    }
    return JSON.parse(Token);
  });

  const handleChange = () => setIsAchieved(!isAchieved);

  const valueText = (value) => {
    setSlider(value);
    value === 100 ? setIsAchieved(true) : setIsAchieved(false);
    return `${value}%`;
  };

  const onRegister = async () => {
    const data = {
      how_much_achieved: slider,
      achieved: isAchieved,
    };

    try {
      const response = await API.patch(patchUpdateHabit(id), data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      maxWidth="320px"
      width="100%"
      margin="15px auto"
    >
      <Typography id="discrete-slider" gutterButton>
        Editar hábito
      </Typography>
      <Slider
        defaultValue={0}
        getAriaValueText={valueText}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={5}
        marks
        min={0}
        max={100}
      />
      <FormControlLabel
        disabled
        control={
          <Checkbox
            color="primary"
            checked={isAchieved}
            onChange={handleChange}
          />
        }
        label="Concluído"
      />
      <Button
        variant="contained"
        size="small"
        color="primary"
        onClick={onRegister}
      >
        Atualizar hábito
      </Button>
    </Box>
  );
};

export default FormUpdateHabit;
