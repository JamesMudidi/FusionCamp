import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";


class Footer extends Component {
    render() {
        return (
            <Navbar fixed="bottom" bg="light" variant="light" className="footer">
                <Container>
                    <Nav className="ml-auto">
                        <Navbar.Text>
                        <b>scripted by: &copy;</b> <a href="https://github.com/JamesMudidi" className="james"><b>James Mudidi</b></a>
                        </Navbar.Text>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}

export default Footer;
