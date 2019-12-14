import React from "react";
import { Jumbotron, Container, Button, Form, Row } from "react-bootstrap";
import Header from "../Components/header";
import Footer from "../Components/footer";
import "./register.scss";
import "../Login/login.scss";


const Register = () => {
    return (
        <div>
            <Header />
            <div>
                <Jumbotron fluid className="content-left">
                    <Container >
                        <h4>
                            We are glad you have made<br />
                            it this far.<br />
                            <br />
                            A little more typing typing<br />
                            on the right and you would have<br />
                            registered for the St. Kakumba <br />
                            Chapel Fusion Camp 2020.<br />

                        </h4>
                    </Container>
                </Jumbotron>

                <Jumbotron fluid className="content-right">
                    <Container >
                        <h1>
                            Register
                        </h1>
                        <div className="form">
                            <input type="text" name="name" autoComplete="off" required />
                            <label form="name" className="label-name">
                                <span className="content-name">First Name</span>
                            </label>
                        </div>
                        <div className="form">
                            <input type="text" name="name" autoComplete="off" required />
                            <label form="name" className="label-name">
                                <span className="content-name">Last Name</span>
                            </label>
                        </div>
                        <div className="form">
                            <input type="text" name="name" autoComplete="off" required />
                            <label form="name" className="label-name">
                                <span className="content-name">Other Names</span>
                            </label>
                        </div>
                        <div className="form">
                            <input type="date" name="name" autoComplete="off" required />
                            <label form="name" className="label-name">
                            </label>
                        </div>
                        <div className="form">
                            <input type="number" name="name" autoComplete="off" required />
                            <label form="name" className="label-name">
                                <span className="content-name">Phone Number</span>
                            </label>
                        </div>
                        <div className="form">
                            <input type="text" name="name" autoComplete="off" required />
                            <label form="name" className="label-name">
                                <span className="content-name">Who owns the number above?</span>
                            </label>
                        </div>
                        <div className="form">
                            <input type="email" name="name" autoComplete="off" required />
                            <label form="name" className="label-name">
                                <span className="content-name">Email</span>
                            </label>
                        </div>
                        <div className="form">
                            <input type="text" name="name" autoComplete="off" required />
                            <label form="name" className="label-name">
                                <span className="content-name">Who owns the email above?</span>
                            </label>
                        </div>
                        <div className="form">
                            <input type="text" name="name" autoComplete="off" required />
                            <label form="name" className="label-name">
                                <span className="content-name">Next of Kin's name</span>
                            </label>
                        </div>
                        <div className="form">
                            <input type="number" name="name" autoComplete="off" required />
                            <label form="name" className="label-name">
                                <span className="content-name">Next of Kin's number</span>
                            </label>
                        </div>
                        <div className="form">
                            <input type="text" name="name" autoComplete="off" required />
                            <label form="name" className="label-name">
                                <span className="content-name">Relation to next of Kin</span>
                            </label>
                        </div>
                        <div className="form">
                            <input type="text" name="name" autoComplete="off" required />
                            <label form="name" className="label-name">
                                <span className="content-name">Tribe</span>
                            </label>
                        </div>
                        <div className="form">
                            <input type="text" name="name" autoComplete="off" required />
                            <label form="name" className="label-name">
                                <span className="content-name">Home Church</span>
                            </label>
                        </div>
                        <Form.Group as={Row} controlId="formGridState">
                            <Form.Control as="select">
                            <option>Compassion International</option>
                            <option>Kyampisi</option>
                            <option>Self Sponsored</option>
                            </Form.Control>
                        </Form.Group>
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

export default Register;
