
import React from "react";
import Header from "./Components/header";
import Footer from "./Components/footer";
import { Container } from "react-bootstrap";

const NotFound = ({ location }) => {
  return (
    <div>
      <Header />
      <section className="not-found">
      <Container>
        <div className="not-found-text" align="center">
          <h1>404</h1>
          <h3>
            Page not found.
          </h3>
          <a href="/">Back to home page.</a>
        </div>
      </Container>
      </section>
      <Footer />
    </div>
  );
};

export default NotFound;