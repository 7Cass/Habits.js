// react
import { useEffect } from "react";

// components
import Menu from "../../components/Menu";
import HabitsCard from "../../components/HabitsCard";
import UserCard from "../../components/UserCard";
import Footer from "../../components/Footer";

// styles
import { PrincipalDiv, Container, InnerContainer, DevelopedBy } from "./styles";

// providers
import { useChecked } from "../../providers/user";

// react router dom
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";

// motion
import { motion } from "framer-motion";
import {
  pageVariants,
  pageTransition,
  pageStyle,
} from "../../helper/animation";
//---------------------------------------------
const HomePage = () => {
  const history = useHistory();
  const { isAuth, checkAuth } = useChecked();

  useEffect(() => {
    checkAuth();
    //eslint-disable-next-line
  }, []);

  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {isAuth ? (
        <PrincipalDiv>
          <Menu />
          <Container>
            <InnerContainer>
              <HabitsCard />
              <UserCard />
            </InnerContainer>
            <DevelopedBy>
              Desenvolvido por
              <span onClick={() => history.push("/developers")}> Squad 1</span>
            </DevelopedBy>
          </Container>
          <Footer />
        </PrincipalDiv>
      ) : (
        <Redirect to="/" />
      )}
    </motion.div>
  );
};

export default HomePage;
