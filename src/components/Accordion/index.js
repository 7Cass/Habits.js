import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import FormUpdateHabit from "../FormUpdateHabit";

import { Tags, DetailsContainer, Title } from "./styles.js";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "10px 0",
  },
  heading: {
    fontSize: "1.4rem",
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: "Montserrat",
    fontWeight: "bold",
  },
  accordion: {
    background: "#16181c",
    color: "#eff7fe",
    margin: "10px 0",
  },
  accordionText: {
    fontFamily: "Montserrat",
  },
  icon: {
    margin: "5px 0",
  },
}));

export default function SimpleAccordion({
  achieved,
  category,
  difficulty,
  frequency,
  how_much_achieved,
  title,
  id,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          className={classes.accordionText}
          expandIcon={<ExpandMoreIcon className={classes.accordion} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {achieved ? (
            <i
              class="far fa-check-circle"
              style={{
                color: "#91F291",
                fontSize: "2rem",
                marginRight: "10px",
              }}
            ></i>
          ) : (
            <i
              class="far fa-calendar-alt"
              style={{ fontSize: "2rem", marginRight: "10px" }}
            ></i>
          )}
          <Title className={classes.heading}>{title}</Title>
        </AccordionSummary>
        <AccordionDetails style={{ justifyContent: "center" }}>
          <DetailsContainer>
            <Tags>
              <div>
                <h4>Categoria</h4>
                <span>{category}</span>
              </div>
              <div>
                <h4>Dificuldade</h4>
                <span>{difficulty}</span>
              </div>
              <div>
                <h4>Frequência</h4>
                <span>{frequency}</span>
              </div>
            </Tags>
            <h2>Atualizar Hábito</h2>
            <FormUpdateHabit id={id} how_much_achieved={how_much_achieved} />
          </DetailsContainer>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
