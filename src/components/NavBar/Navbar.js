import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  BsGithub, BsLinkedin, BsTwitter, BsFacebook,
} from 'react-icons/bs';

const NavBar = (props) => {
  const { name } = props;

  return (
    <>
      {['false'].map((expand) => (
        <Navbar key={false} bg="light" expand={expand} className="mb-3" fixed="top">

          <Container fluid>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

            <Navbar.Brand href="#"><Link to="/MainPage">{name}</Link></Navbar.Brand>

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >

              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Doctor app
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>

                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/ReservationPage">My Reservations</Nav.Link>
                  <Nav.Link href="#action2">Add Reservation</Nav.Link>
                  <Nav.Link href="#action1">Add Item</Nav.Link>
                  <Nav.Link href="#action2">Delete Item</Nav.Link>

                  <NavDropdown
                    title="Options"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/">SignOut</NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://github.com/microverseinc/curriculum-final-capstone/blob/main/projects/business_requirements.md">Project</NavDropdown.Item>

                    <NavDropdown.Item>
                      <span>Carlos vivas</span>
                      <a href="#actions">
                        <BsFacebook />
                      </a>
                      <a href="#actions">
                        <BsGithub />
                      </a>
                      <a href="#actions">
                        <BsLinkedin />
                      </a>
                      <a href="#actions">
                        <BsTwitter />
                      </a>
                    </NavDropdown.Item>

                    <NavDropdown.Item>
                      <span>Matias Aguirre</span>
                      <a href="#actions">
                        <BsFacebook />
                      </a>
                      <a href="#actions">
                        <BsGithub />
                      </a>
                      <a href="#actions">
                        <BsLinkedin />
                      </a>
                      <a href="#actions">
                        <BsTwitter />
                      </a>
                    </NavDropdown.Item>

                    <NavDropdown.Item>
                      <span>Erik Stoupignan</span>
                      <a href="#actions">
                        <BsFacebook />
                      </a>
                      <a href="#actions">
                        <BsGithub />
                      </a>
                      <a href="#actions">
                        <BsLinkedin />
                      </a>
                      <a href="#actions">
                        <BsTwitter />
                      </a>
                    </NavDropdown.Item>

                  </NavDropdown>

                </Nav>

                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>

              </Offcanvas.Body>

            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );

  // <>
  //   <div className="container">
  //     <p>Temporal Navbar</p>
  //     <NavLink to="/ReservationPage"> Reservation Page </NavLink>
  //   </div>
  // </>
};

NavBar.propTypes = {
  name: PropTypes.string,
}.isRequired;

export default NavBar;
