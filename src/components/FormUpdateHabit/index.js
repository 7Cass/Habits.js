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
import { SliderStyles } from "../../styles/makeStyles";

// global state
import { useChecked } from "../../providers/user";

// helper
import { patchUpdateHabit } from "../../helper/habits";
import { getPersonalHabit } from "../../helper/habits";

// components
import DeleteHabit from "../DeleteHabit";
import Button from "../Button";

//--------------------------------------------
const FormUpdateHabit = ({ id, how_much_achieved }) => {
  const classes = SliderStyles();
  const [isAchieved, setIsAchieved] = useState(false);
  const [slider, setSlider] = useState(how_much_achieved);
  const { token, setHabits } = useChecked();

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
      await API.patch(patchUpdateHabit(id), data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const takeHabits = await API.get(getPersonalHabit(), {
        headers: { Authorization: `Bearer ${token}` },
      });
      takeHabits.data.sort((a, b) => a.id - b.id);
      setHabits(takeHabits.data);
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
      <div className={classes.buttons}>
        <Button size="large" styled="outlined-light" onClick={onRegister}>
          Atualizar
        </Button>
        <DeleteHabit habitID={id} />
      </div>
    </Box>
  );
};

export default FormUpdateHabit;
