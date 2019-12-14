import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import Header from "../Components/header";
import Footer from "../Components/footer";
import "./register.scss";


const Register = () => {
  return (
    <div>
      <Header />
      <div>
        <Jumbotron fluid>
          <Container >
            <h1>
              Register
            </h1>
          </Container>
        </Jumbotron>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
