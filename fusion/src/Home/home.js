import React from "react";
import { Jumbotron, Container, Badge } from "react-bootstrap";
import Header from "../Components/header";
import Footer from "../Components/footer";
import "./home.scss";


const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <Jumbotron fluid>
          <Container >
            <h1>
              St. Kakumba Chapel Presents
              <br />
              <Badge variant="dark">Fusion Camp 2020</Badge><br />
              <Badge variant="dark">6 - 10 January 2020</Badge>
            </h1>
            <h4>
              Register now for a fun packed get away at camp
            </h4>
            <h1>
            <Badge variant="secondary">UShs 60, 000</Badge>
            </h1>
          </Container>
        </Jumbotron>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
