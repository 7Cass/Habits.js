// react-router-dom
import { Link } from "react-router-dom";

// styled-components
import { Container } from "./styles";

// background
import bg_404 from "../../assets/not_found/404.svg";

// motion
import { motion } from "framer-motion";
import {
  pageVariants,
  pageTransition,
  pageStyle,
} from "../../helper/animation";

// ---------------------------------------------
const NotFound = () => {
  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Container>
        <h1>Página não encontrada</h1>
        <img src={bg_404} alt="Página não encontrada" />
        <div>
          <h2>
            Voltar para <Link to="/homepage">Habits.js</Link>
          </h2>
        </div>
      </Container>
    </motion.div>
  );
};

export default NotFound;
