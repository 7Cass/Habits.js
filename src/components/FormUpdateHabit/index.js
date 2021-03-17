// API
import API from "../../services";

// react
import { useState } from "react";

// material ui
import {
  Box,
  FormControlLabel,
  Checkbox,
  Slider,
  Hidden,
} from "@material-ui/core";

// global state
import { useChecked } from "../../providers/user";

import Button from "../Button";

// helper
import { patchUpdateHabit } from "../../helper/habits";

import { SliderStyles } from "../../styles/makeStyles";
//--------------------------------------------

//--------------------------------------------
const FormUpdateHabit = ({ id, how_much_achieved }) => {
  const classes = SliderStyles();
  const [isAchieved, setIsAchieved] = useState(false);
  const [slider, setSlider] = useState(how_much_achieved);
  const { isChecked, habits, setHabits } = useChecked();
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
      const newHabits = habits.map((element) => {
        if (element.id === id) {
          element.how_much_achieved = data.how_much_achieved;
          element.achieved = data.achieved;
        }
        return element;
      });

      setHabits(newHabits);

      await API.patch(patchUpdateHabit(id), data, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box display="flex" flexDirection="column">
      <Slider
        defaultValue={how_much_achieved}
        getAriaValueText={valueText}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={5}
        marks
        min={0}
        max={100}
        className={classes.slider}
      />
      <Hidden xlDown>
        <FormControlLabel
          disabled
          control={<Checkbox checked={isAchieved} onChange={handleChange} />}
          label="Concluído"
        ></FormControlLabel>
      </Hidden>
      <Button size="large" styled="outlined-light" onClick={onRegister}>
        Atualizar Hábito
      </Button>
      <button className={classes.removeButton}>
        <i class="fas fa-trash-alt"></i>
        Remover Hábito
      </button>
    </Box>
  );
};

export default FormUpdateHabit;
