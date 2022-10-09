import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/layout/navbar.css"
import { useNavigate } from "react-router-dom";

function Navigationbar() {
  const navigate = useNavigate();

  return (
    <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand className="navbrand" onClick={() => navigate("/")}>ToDo List</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link className="link_header" onClick={() => navigate("/")}>Home</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Navigationbar;