import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import NavBar from '../../NavBar/Navbar';
import loadingStatus from '../../../redux/reduxConst';
import * as DoctorsSlice from '../../../redux/Doctors/DoctorsSlice';
import './Details.css';

function Details() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const doctors = useSelector((store) => store.doctors);
  const auth = useSelector((store) => store.Auth);
  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    if (auth.loading === loadingStatus.succeeded && doctors.loading !== loadingStatus.succeeded) {
      dispatch(
        DoctorsSlice.fetch(auth.user),
      );
    }
  }, [dispatch, auth, doctors]);

  // If Reload the page, this use Effect will send the user to the Main Page
  useEffect(() => {
    if (doctors.loading === loadingStatus.idle && auth.loading === loadingStatus.idle) {
      navigate('/MainPage');
    }
  }, [dispatch, auth, doctors, navigate]);

  if (doctors.loading === loadingStatus.idle || auth.loading === loadingStatus.pending) {
    return (
      <section className="margin_top">
        <NavBar name="Details Page" />
        <div className="container text-center">
          <div>
            Doctors Loading...
            <div className="spinner-border text-secondary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // eslint-disable-next-line prefer-destructuring
  const doctor = doctors.list.filter((doc) => doc.id === state.doc_id)[0];

  return (

    <>
      <NavBar name="Details Page" />

      <Container>
        <Row className="d-flex">
          <Col xs={12} md={5}>
            <Card className="mb-4 p-3">
              <Card.Img variant="top" src={doctor.photo} alt="doctor" />
            </Card>
          </Col>

          <Col xs={12} md={5}>
            <Card.Body>
              <Card.Title><h5>{doctor.name}</h5></Card.Title>
              <div>
                <Table striped bordered hover responsive="sm">
                  <tbody>
                    <tr>
                      <th>Specialization</th>
                      <td>{doctor.specialization}</td>
                    </tr>
                    <tr>
                      <th>Appointment</th>
                      <td className="d-flex justify-content-end btn btn-success"><NavLink to="/AddAppointmentsForm">Book Appointment</NavLink></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Container>

    </>
  );
}

export default Details;
