import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as ={Link} to="/">Home</Nav.Link>
        <Nav.Link as ={Link} to="/movies">Movies</Nav.Link>
        <Nav.Link as ={Link} to="/Contact">Contact</Nav.Link>
      </Nav>
    </Container>
   {/* <Link to="/about">
    <Button variant="info">About</Button>{" "}
   </Link> */}
  </Navbar>
  );
}

export default NavBar
