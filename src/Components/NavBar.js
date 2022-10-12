import React from 'react'
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './../Components/Custom.scss'
import Home from './Home';
// import "../scss/Custom.scss";

function NavBar() {
  let navigate=useNavigate()
  let toHome=()=>
  {
    navigate('/')
  }
  let toEducation=()=>
  {
    navigate('/Education')
  }
  let toExperience=()=>
  {
    navigate('/Experience')
  }
  let toProject=()=>
  {
    navigate('/Project')
  }
  let toContact=()=>
  {
    navigate('/Contact')
  }
  return (
    <Navbar className="Main_Navbar" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="logoName">
          {" "}
          &lt;
          <img
            src={require("./../Assests/signature-removebg-preview.png")}
            width="100%"
            alt=""
          />
          /&gt;
        </Navbar.Brand>
        <Nav className="d-flex">
          <Nav.Link onClick={toHome}>Home</Nav.Link>
          <Nav.Link onClick={toEducation}>Education</Nav.Link>
          <Nav.Link onClick={toExperience}>Experience</Nav.Link>
          <Nav.Link onClick={toProject}>Project</Nav.Link>
          <Nav.Link onClick={toContact}>Contact Me</Nav.Link>
          <Nav.Link href="Ranjith CV(S).pdf" download="Ranjith CV(S).pdf">
            Resume
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default NavBar