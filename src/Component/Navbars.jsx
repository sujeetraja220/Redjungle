
import React from 'react';
import {Button,Container,Form,Nav,Navbar, NavbarBrand, NavLink} from "react-bootstrap"
import img1 from "./imag/logo.png"



function Navbars() {
  return (
    <Navbar bg="light" expand="sm"  className="shadow-lg p-0 mb-2 mt-2 ms-1 me-1 bg-white rounded border border-dark ">
      <Container fluid>
      <Navbar>
        <Container>
          <NavbarBrand href="#home">
            <img
              src={img1}
              width="80"
              height="40"
              back
              className="d-inline-block align-top"
              alt=''
             
            />
          </NavbarBrand>
        </Container>
      </Navbar>
      <NavbarBrand href="#" className='ms-0 p0' style={{color:"red"}}>𝐑𝐄𝐃𝐉𝐔𝐍𝐆𝐋𝐄</NavbarBrand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink href="#action1">Home</NavLink>
            <NavLink href="#action2">Photo</NavLink>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-4" aria-label="Search" variant="outline-warning"/> 
          </Form>
          <Button variant="outline-success" className='me-4'>Search</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;