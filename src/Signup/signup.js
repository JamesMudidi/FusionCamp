import React, { Component } from 'react';
import { Jumbotron, Container, Button } from "react-bootstrap";
import { connect } from 'react-redux';
import { signupAction } from '../actions/userActions';
import Header from "../Components/header";
import Footer from "../Components/footer";
import "./signup.scss";
import "../Login/login.scss";


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      role: '',
      email: '',
      username: '',
      password: '',
      confirmed_password: '',
    };
  }

  onChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  onSubmitHandler = () => {
    const { Signup } = this.props;
    const { first_name, last_name, role, email, username, password, confirmed_password } = this.state;
    Signup(first_name, last_name, role, email, username, password, confirmed_password);
  };

  render() {
    const { first_name, last_name, role, email, username, password, confirmed_password } = this.state;
    const { isLoading } = this.props;

    return (
      <div>
        <Header />
        <div>
          <Jumbotron fluid className="content-left">
            <Container >
              <h4>
                Hello,<br />
                We are so glad you are here.<br />
                <br />
                Just do the typing typing on<br />
                the right and you will get your<br />
                own set of keys to the app.<br />

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
                Sign up
              </h1>
              <div className="form">
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onChangeHandler}
                  value={first_name}
                  name="first_name"
                  autoComplete="off"
                  required />
                <label form="name" className="label-name">
                  <span className="content-name">First Name</span>
                </label>
              </div>
              <div className="form">
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onChangeHandler}
                  value={last_name}
                  name="last_name"
                  autoComplete="off"
                  required />
                <label form="name" className="label-name">
                  <span className="content-name">Last Name</span>
                </label>
              </div>
              <div className="form">
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onChangeHandler}
                  value={username}
                  name="username"
                  autoComplete="off"
                  required />
                <label form="name" className="label-name">
                  <span className="content-name">User Name</span>
                </label>
              </div>
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
                  type="text"
                  className="form-control"
                  onChange={this.onChangeHandler}
                  value={role}
                  name="role"
                  autoComplete="off"
                  required />
                <label form="name" className="label-name">
                  <span className="content-name">Role</span>
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
              <div className="form">
                <input
                  type="password"
                  className="form-control"
                  onChange={this.onChangeHandler}
                  value={confirmed_password}
                  name="confirmed_password"
                  autoComplete="off"
                  required />
                <label form="name" className="label-name">
                  <span className="content-name">Confirm Password</span>
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
  Signup: ({ first_name, last_name, role, email, username, password, confirmed_password }) => {
    state(signupAction({ first_name, last_name, role, email, username, password, confirmed_password })
    );
  }
});

const mapDispatchToProps = dispatch => ({
  Signup: () => {
    dispatch(signupAction()
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
