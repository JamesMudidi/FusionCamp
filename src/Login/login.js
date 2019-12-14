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
      <Jumbotron fluid className="content-left">
          <Container >
            <h4>
              Feel free to unlock the door to<br/>
              our app and Sign up a Camper<br/>
              or yourself.<br/>
              <br/>
              If you don't have the keys yet,<br/>
              No worries. Access them by <br/>
              Sign uping.
            </h4>
          </Container>
        </Jumbotron>

        <Jumbotron fluid className="content-right">
          <Container >
            <h1>
              Login
            </h1>
            <div className="form">
                <input type="email" name="name" autoComplete="off" required />
                <label form="name" className="label-name">
                    <span className="content-name">Email</span>
                </label>
            </div>
            <div className="form">
                <input type="password" name="name" autoComplete="off" required />
                <label form="name" className="label-name">
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
