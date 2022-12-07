
import React from 'react';
import { Button, Container, Form, Nav, Navbar, NavbarBrand, NavLink, FormControl } from "react-bootstrap"
import img1 from "./imag/logo.png"
//import App from "../App.css"
//import { FaHistory, FaHome, FaPhotoVideo, FaSearch, FaViadeo } from 'react-icons/fa';



function Navbars() {
  return (
    <>
      <Navbar id='mainnavbar' expand="sm" className="shadow-lg p-0 mb-2 mt-2 ms-1 me-1 bg-red rounded border border-dark ">
        <Container fluid>
          <Navbar>
            <Container>
              <NavbarBrand href="#home">
                <img
                  src={img1}
                  width="60"
                  height="40"
                  className="d-inline-block align-top"
                  alt=''

                />
              </NavbarBrand>
            </Container>
          </Navbar>
          <NavbarBrand href="#" className='ms-0 ' style={{ color: "red",fontWeight: 900, }}>𝐑𝐄𝐃𝐉𝐔𝐍𝐆𝐋𝐄</NavbarBrand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100vh',fontWeight:700}}
              navbarScroll
            >
              <NavLink href="/">Home</NavLink>
              <NavLink href="/photo">Photo</NavLink>
              <NavLink href="/story">Story</NavLink>
              <NavLink href="/short" >Shorts</NavLink>
            </Nav>

          </Navbar.Collapse>
          <Form className="d-flex" >
            <FormControl type="search" placeholder="Search xxx Videos" className="me-2 " aria-label="Search" variant="outline-warning"/>
          </Form>
          <Button variant="outline-danger" className='me-2 m-2 '>Search</Button>
        </Container>
      </Navbar>

    </>
  );
}


export default Navbars;