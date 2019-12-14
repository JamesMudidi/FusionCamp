import React from "react";
import { Jumbotron, Container, Button } from "react-bootstrap";
import Header from "../Components/header";
import Footer from "../Components/footer";
import "./signup.scss";
import "../Login/login.scss";


const Signup = () => {
  return (
    <div>
      <Header />
      <div>
      <Jumbotron fluid className="content-left">
          <Container >
            <h4>
              Hello,<br/>
              We are so glad you are here.<br/>
              <br/>
              Just do the typing typing on<br/>
              the right and you will get your<br/>
              own set of keys to the app.<br/>
              
            </h4>
          </Container>
        </Jumbotron>

      <Jumbotron fluid className="content-right">
          <Container >
            <h1>
              Sign up
            </h1>
            <div className="form">
                <input type="text" name="name" autoComplete="off" required />
                <label for="name" className="label-name">
                    <span className="content-name">First Name</span>
                </label>
            </div>
            <div className="form">
                <input type="text" name="name" autoComplete="off" required />
                <label for="name" className="label-name">
                    <span className="content-name">Last Name</span>
                </label>
            </div>
            <div className="form">
                <input type="text" name="name" autoComplete="off" required />
                <label for="name" className="label-name">
                    <span className="content-name">User Name</span>
                </label>
            </div>
            <div className="form">
                <input type="email" name="name" autoComplete="off" required />
                <label for="name" className="label-name">
                    <span className="content-name">Email</span>
                </label>
            </div>
            <div className="form">
                <input type="text" name="name" autoComplete="off" required />
                <label for="name" className="label-name">
                    <span className="content-name">Role</span>
                </label>
            </div>
            <div className="form">
                <input type="password" name="name" autoComplete="off" required />
                <label for="name" className="label-name">
                    <span className="content-name">Password</span>
                </label>
            </div>
            <div className="form">
                <input type="password" name="name" autoComplete="off" required />
                <label for="name" className="label-name">
                    <span className="content-name">Confirm Password</span>
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

export default Signup;
