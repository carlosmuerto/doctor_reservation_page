/* eslint-disable no-unused-vars */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

import {
  BsGithub, BsLinkedin, BsTwitter, BsFacebook,
} from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import loadingStatus from '../../redux/reduxConst';
import * as AuthSlice from '../../redux/Auth/AuthSlice';

const NavBar = (props) => {
  const { name } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.Auth.user);
  const loading = useSelector((store) => store.Auth.loading);

  const logOutOnClick = async () => {
    dispatch(
      AuthSlice.logOut(user),
      navigate('/'),
    );
  };

  return (
    <>
      {['false'].map((expand) => (
        <Navbar key={false} bg="light" expand={expand} className="mb-3" fixed="top">

          <Container fluid>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

            <Navbar.Brand href="/MainPage">{name}</Navbar.Brand>

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >

              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <h6>Doctor&apos;s app</h6>
                  <p>
                    Welcome
                    {
                      loading === loadingStatus.succeeded
                        ? ` ${user.userName}`
                        : null
                    }
                    !
                  </p>
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>

                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/ReservationPage">My Reservations</Nav.Link>
                  <Nav.Link href="#action2">Add Reservation</Nav.Link>
                  <Nav.Link href="/AddItem">Add Item</Nav.Link>
                  <Nav.Link href="/DeleteItem">Delete Item</Nav.Link>

                  <NavDropdown
                    title="Options"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item onClick={logOutOnClick}>
                      <strong>SignOut</strong>
                    </NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://github.com/microverseinc/curriculum-final-capstone/blob/main/projects/business_requirements.md">Project</NavDropdown.Item>

                    <NavDropdown.Item>
                      <span>Carlos vivas</span>
                      <BsFacebook />
                      <BsGithub />
                      <BsLinkedin />
                      <BsTwitter />
                    </NavDropdown.Item>

                    <NavDropdown.Item>
                      <span>Matias Aguirre</span>
                      <BsFacebook />
                      <BsGithub />
                      <BsLinkedin />
                      <BsTwitter />
                    </NavDropdown.Item>

                    <NavDropdown.Item>
                      <span>Erik Stoupignan</span>
                      <BsFacebook />
                      <BsGithub />
                      <BsLinkedin />
                      <BsTwitter />
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
};

NavBar.propTypes = {
  name: PropTypes.string,
}.isRequired;

export default NavBar;
