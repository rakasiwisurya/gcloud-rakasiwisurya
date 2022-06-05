import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home" className="text-secondary" style={{ fontWeight: 700 }}>
          My Portfolio
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Rakasiwi Surya</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
