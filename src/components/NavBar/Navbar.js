import React, { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  BsGithub, BsLinkedin, BsTwitter, BsFacebook,
} from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import * as AuthSlice from '../../redux/Auth/AuthSlice';
import '../../styles/Navbar.scss';
import { loadLocalStorage } from '../../redux/localStorage/storage';

const NavBar = (props) => {
  const { name, goto } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.Auth.user);
  const localStorageData = loadLocalStorage();

  useEffect(() => {
    const localStorageData = loadLocalStorage();
    if (localStorageData !== null) {
      try {
        // console.log('Login State:', localStorageData.role);
      } catch {
        navigate('/loginPage');
      }
    } else {
      navigate('/loginPage');
    }
  }, [navigate, localStorageData]);

  const logOutOnClick = async () => {
    dispatch(
      AuthSlice.logOut(loadLocalStorage()),
      navigate('/'),
    );
  };

  return (
    <>
      {['false'].map((expand) => (
        <Navbar key={false} expand={expand} className="" fixed="top">

          <>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

            {
              goto
                ? <Navbar.Brand href={goto}>Back</Navbar.Brand>
                : <Navbar.Brand href="/MainPage">{name}</Navbar.Brand>
            }

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
                    {' '}
                    {user.userName}
                    !
                  </p>
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body className="position-relative">

                <Nav className="justify-content-end flex-grow-1">
                  <Nav.Link className="hover_effect ps-2" href="/AppointmentsPage">My Appointments</Nav.Link>
                  <Nav.Link className="hover_effect ps-2" href="/AddAppointmentsForm">Add Appointment</Nav.Link>
                  {
                    user.role === 'admin'
                      ? <Nav.Link className="hover_effect ps-2" href="/AddItem">Add Doctor</Nav.Link>
                      : null
                  }

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
  goto: PropTypes.string,
}.isRequired;

export default NavBar;
