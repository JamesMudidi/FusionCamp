import React, { Component } from 'react';
import { Jumbotron, Container, Button } from "react-bootstrap";
import { connect } from 'react-redux';
import { loginAction } from '../actions/userActions';
import Header from "../Components/header";
import Footer from "../Components/footer";
import "./login.scss";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  onSubmitHandler = () => {
    const { Login } = this.props;
    const { email, password } = this.state;
    Login(email, password);
  };

  render() {
    const { email, password } = this.state;
    const { isLoading } = this.props;

    return (
      <div>
        <Header />
        <div>
          <Jumbotron fluid className="content-left">
            <Container >
              <h4>
                Feel free to unlock the door to<br />
                our app and Sign up a Camper<br />
                or yourself.<br />
                <br />
                If you don't have the keys yet,<br />
                No worries. Access them by <br />
                Sign uping.
            </h4>
            </Container>
          </Jumbotron>

          <Jumbotron fluid className="content-right">
            {isLoading && (
              <div className="spinner-grow text-info" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            )}
            <Container >
              <h1>
                Login
            </h1>
              <div className="form">
                <input
                  type="email"
                  className="form-control"
                  onChange={this.onChangeHandler}
                  value={email}
                  name="email"
                  autoComplete="off"
                  required />
                <label form="name" className="label-name">
                  <span className="content-name">Email</span>
                </label>
              </div>
              <div className="form">
                <input
                  type="password"
                  className="form-control"
                  onChange={this.onChangeHandler}
                  value={password}
                  name="password"
                  autoComplete="off"
                  required />
                <label form="name" className="label-name">
                  <span className="content-name">Password</span>
                </label>
              </div>
              <Button type="submit" className="button" onClick={this.onSubmitHandler}>
                Submit
            </Button>
            </Container>
          </Jumbotron>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Login: ({ email, password }) => {
    state(loginAction({ email, password })
    );
  }
});

const mapDispatchToProps = dispatch => ({
  Login: () => {
    dispatch(loginAction()
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
