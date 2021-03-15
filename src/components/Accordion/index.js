import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Button from "../Button";

import { Tags, DetailsContainer } from "./styles.js";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
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
}) {
  const classes = useStyles();

  achieved = true;

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
          <Typography className={classes.heading}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DetailsContainer>
            <Tags>
              <h4>Categoria</h4>
              <div>{category}</div>
              <h4>Dificuldade</h4>
              <div>{difficulty}</div>
              <h4>Frequência</h4>
              <div>{frequency}</div>
            </Tags>
            <h2>Performance do Hábito</h2>
            <h2>Atualizar Hábito</h2>
            <Button size="large" styled="outlined-light">
              Atualizar
            </Button>
          </DetailsContainer>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
