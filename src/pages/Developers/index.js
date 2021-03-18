// react-router-dom
import { Link } from "react-router-dom";

// material-ui icons
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";

// logos
import logo_figma from "../../assets/logo_figma.svg";
import logo_gitlab from "../../assets/logo_gitlab.svg";

// fotos de perfil
import img_alex from "../../assets/alex.png";
import img_joao from "../../assets/joao.png";
import img_diego from "../../assets/diego.png";
import img_andre from "../../assets/andre.png";

// styled-components
import {
  Container,
  BackContainer,
  UserCard,
  UserDetails,
  CardsContainer,
} from "./styles";

const Developers = () => {
  const squad = [
    {
      name: "Alex Stevan Schmitt",
      position: "Tech Lead",
      img: img_alex,
      links: {
        linkedIn: "https://www.linkedin.com/in/ximitti/",
        github: "https://github.com/ximitti",
        email: "mailto:alex.schmitt@outlook.com",
      },
    },
    {
      name: "João Pedro Arruda",
      position: "Qualiy Assurance",
      img: img_joao,
      links: {
        linkedIn: "https://linkedin.com/in/jparruda",
        github: "https://github.com/7Cass",
        email: "mailto:jaaopbr@gmail.com",
      },
    },
    {
      name: "Diego Richard Araujo",
      position: "Product Owner",
      img: img_diego,
      links: {
        linkedIn: "https://www.linkedin.com/in/diego-silva-aa7b991b9/",
        github: "https://github.com/diegosilva998",
        email: "mailto:dev.diegosilva@hotmail.com",
      },
    },
    {
      name: "André Luiz Vieira",
      position: "Scrum Master",
      img: img_andre,
      links: {
        linkedIn: "https://www.linkedin.com/in/andreluizhillerv/",
        github: "https://github.com/AndrelhVieira",
        email: "mailto:andreluizhillerv@gmail.com",
      },
    },
  ];

  return (
    <Container>
      <BackContainer>
        <Link to="/homepage">
          Voltar para <span>Habits.js</span>
        </Link>
      </BackContainer>
      <h1>Projeto Desenvolvido Por:</h1>
      <CardsContainer>
        {squad.map((dev) => (
          <UserCard>
            <img src={dev.img} alt={dev.name} />
            <UserDetails>
              <h3>{dev.name}</h3>
              <p>{dev.position}</p>
              <div>
                <a
                  href={dev.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon fontSize="large" />
                </a>
                <a
                  href={dev.links.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon fontSize="large" />
                </a>
                <a
                  href={dev.links.email}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MailIcon fontSize="large" />
                </a>
              </div>
            </UserDetails>
          </UserCard>
        ))}
      </CardsContainer>
      <footer>
        <h2>Repositório do Projeto e Figma</h2>
        <div>
          <a
            href="https://gitlab.com/diegosilva98/gestao-de-habitos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo_gitlab} alt="Logo GitLab" />
          </a>
          <a
            href="https://www.figma.com/file/xhVj45AGuejCBHFjB38Mcp/Habitics?node-id=0%3A1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo_figma} alt="Logo Figma" />
          </a>
        </div>
      </footer>
    </Container>
  );
};

export default Developers;
