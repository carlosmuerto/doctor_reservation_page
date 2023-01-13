import React from 'react';
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  BsGithub, BsLinkedin, BsTwitter, BsFacebook,
} from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import loadingStatus from '../../redux/reduxConst';
import * as AuthSlice from '../../redux/Auth/AuthSlice';
import '../../styles/Navbar.scss';

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
        <Navbar key={false} expand={expand} className="" fixed="top">

          <>

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

              <Offcanvas.Body className="position-relative">

                <Nav className="justify-content-end flex-grow-1">
                  <Nav.Link className="hover_effect ps-2" href="/ReservationPage">My Reservations</Nav.Link>
                  <Nav.Link className="hover_effect ps-2" href="#action2">Add Reservation</Nav.Link>
                  <Nav.Link className="hover_effect ps-2" href="/AddItem">Add Item</Nav.Link>
                  <Nav.Link className="hover_effect ps-2" href="/DeleteItem">Delete Item</Nav.Link>

                  <NavDropdown
                    title="Options"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item onClick={logOutOnClick} className="output_hover_effect ps-2">
                      <strong>SignOut</strong>
                    </NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item className="hover_effect ps-2" href="https://github.com/microverseinc/curriculum-final-capstone/blob/main/projects/business_requirements.md">Project requirements</NavDropdown.Item>

                    <NavDropdown.Divider />

                    <NavDropdown.Item href="https://www.linkedin.com/in/carlos-antonio-vivas-nieto/" target="blank" className="partner_hover_effect ps-2 d-flex justify-content-between">

                      <span>
                        Carlos vivas
                      </span>
                      <span>
                        <BsLinkedin />
                      </span>

                    </NavDropdown.Item>

                    <NavDropdown.Item href="https://www.linkedin.com/in/matiaguirre/" target="blank" className="partner_hover_effect ps-2 d-flex justify-content-between">

                      <span>
                        Matias Aguirre
                      </span>
                      <span>
                        <BsLinkedin />
                      </span>

                    </NavDropdown.Item>

                    <NavDropdown.Item href="https://www.linkedin.com/in/erik-sanchez-beltran/" target="blank" className="partner_hover_effect ps-2 d-flex justify-content-between">

                      <span>
                        Erik Stoupignan Sánchez Beltrán
                      </span>
                      <span>
                        <BsLinkedin />
                      </span>

                    </NavDropdown.Item>

                  </NavDropdown>

                </Nav>

                <div className="position-absolute bottom-0 start-50 translate-middle-x mb-5 container_links_navbar">
                  <div className="icons_navbar">
                    <BsTwitter />
                    <BsFacebook />
                    <BsGithub />
                    <BsLinkedin />
                  </div>
                  <div className="rights_reserved_navbar">
                    <p>© All rights reserved</p>
                  </div>
                </div>

                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}

              </Offcanvas.Body>

            </Navbar.Offcanvas>
          </>
        </Navbar>
      ))}
    </>
  );
};

NavBar.propTypes = {
  name: PropTypes.string,
}.isRequired;

export default NavBar;
