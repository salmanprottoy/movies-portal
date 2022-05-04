import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Movies-Portal</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/trending">Trending</Nav.Link>
              <Nav.Link href="/top_rated">Top Rated</Nav.Link>
              <Nav.Link href="/upcoming">Upcoming</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
