import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar bg="dark" expand="lg">
  <Container>
    <Navbar.Brand  style={{textDecoration: 'none'}}><Link to="/">Poke App</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link style={{textDecoration: 'none'}}><Link to="/">Home</Link></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Navigation