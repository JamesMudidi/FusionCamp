import React from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";
import Header from "../Components/header";
import Footer from "../Components/footer";
import "./login.scss";


const Login = () => {
  return (
    <div>
      <Header />
      <div>
        <Jumbotron fluid>
          <Container >
            <h1>
              Login
            </h1>
            <div className="form">
                <input type="text" name="name" autoComplete="off" required />
                <label for="name" className="label-name">
                    <span className="content-name">Email</span>
                </label>
            </div>
            <div className="form">
                <input type="password" name="name" autoComplete="off" required />
                <label for="name" className="label-name">
                    <span className="content-name">Password</span>
                </label>
            </div>
            <Button type="submit" className="button">
                Submit
            </Button>
          </Container>
        </Jumbotron>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
