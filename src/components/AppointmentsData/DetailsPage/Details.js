/* eslint-disable max-len */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import loadingStatus from '../../../redux/reduxConst';
import NavBar from '../../NavBar/Navbar';
import * as DoctorsSlice from '../../../redux/Doctors/DoctorsSlice';

function Appointments() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const doctors = useSelector((store) => store.doctors);
  const auth = useSelector((store) => store.Auth);
  const location = useLocation();
  const { state } = location;
  const data = state.AppointmentData;

  useEffect(() => {
    if (auth.loading === loadingStatus.succeeded && doctors.loading !== loadingStatus.succeeded) {
      dispatch(
        DoctorsSlice.fetch(auth.user),
      );
    }
  }, [dispatch, auth, doctors]);

  // If Reload the page, this use Effect will send the user to the Appointments list
  useEffect(() => {
    if (doctors.loading === loadingStatus.idle && auth.loading === loadingStatus.idle) {
      navigate('/AppointmentsPage');
    }
  }, [dispatch, auth, doctors, navigate]);

  if (doctors.loading !== loadingStatus.succeeded || auth.loading !== loadingStatus.succeeded) {
    return (
      <section className="margin_top">
        <NavBar name="Appointments Page" />
        <div className="container text-center">
          <div>
            Loading...
            <div className="spinner-border text-secondary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // eslint-disable-next-line prefer-destructuring
  const doctor = doctors.list.filter((doc) => doc.id === data.doctor_id)[0];

  return (
    <section className="margin_top">
      <NavBar name="Back" goto="/AppointmentsPage" />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8 col-sm-2 my_border">
            <img src={doctor.photo} alt={doctor.photo} />
          </div>
          <div className="col-8 col-sm-10">
            <div className="row">
              <div className="col-12 my_border">
                <h1>
                  Doctor:
                  {' '}
                  {doctor.name}
                </h1>
                <p>
                  Date:
                  {' '}
                  {data.datetime_of_appointment}
                </p>
              </div>
              <div className="col-12 my_border">
                <h3>
                  Description:
                  {' '}
                  {data.description}
                </h3>
              </div>
              {
                auth.user.role === 'admin'
                  ? (
                    <div className="col-12">
                      <button type="button" className="btn btn-danger">Danger</button>
                    </div>
                  )
                  : null
              }
            </div>
          </div>
          <div className="col-8 col-sm-10">
            <div className="row">
              <div className="col-12 my_border">
                <h2>My Appointment</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Appointments;
