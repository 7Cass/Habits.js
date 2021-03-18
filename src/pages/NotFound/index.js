// react-router-dom
import { Link } from "react-router-dom";

// styled-components
import { Container } from "./styles";

// background
import bg_404 from "../../assets/not_found/404.svg";

const NotFound = () => {
  return (
    <Container>
      <h1>Página não encontrada</h1>
      <img src={bg_404} alt="Página não encontrada" />
      <div>
        <h2>
          Voltar para <Link to="/homepage">Habits.js</Link>
        </h2>
      </div>
    </Container>
  );
};

export default NotFound;
