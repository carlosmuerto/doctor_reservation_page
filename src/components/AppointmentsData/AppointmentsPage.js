/* eslint-disable max-len */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import loadingStatus from '../../redux/reduxConst';
import NavBar from '../NavBar/Navbar';
import * as AppointmentsSlice from '../../redux/Appointments/AppointmentsSlice';
import * as AuthSlice from '../../redux/Auth/AuthSlice';
import { loadLocalStorage } from '../../redux/localStorage/storage';

function Appointments() {
  // const navigate = useNavigate();
  const appointments = useSelector((store) => store.Appointments);
  const auth = useSelector((store) => store.Auth);
  const dispatch = useDispatch();

  // Check user status and return to the login page if fail
  // useEffect(() => {
  //   if (auth.loading === loadingStatus.failed) {
  //     // eslint-disable-next-line no-console
  //     console.log('Login you user please!');
  //     navigate('/loginPage');
  //   }
  // }, [auth, navigate]);

  useEffect(() => {
    if (auth.loading !== loadingStatus.succeeded && appointments.loading !== loadingStatus.succeeded) {
      dispatch(
        AuthSlice.load(loadLocalStorage()),
      );
    }
  }, [dispatch, auth]);

  useEffect(() => {
    if (auth.loading === loadingStatus.succeeded) {
      dispatch(
        AppointmentsSlice.fetch(auth.user),
      );
    }
  }, [dispatch, auth]);

  // Appointment empty
  if (appointments.list.length === 0 && appointments.loading === loadingStatus.succeeded) {
    return (
      <section className="margin_top">
        <NavBar name="Back" />
        <div className="container text-center">
          <p>You don&apos;t have any Appointments</p>
        </div>
      </section>
    );
  }

  // Appointment loading
  if (appointments.loading !== loadingStatus.succeeded || auth.loading !== loadingStatus.succeeded) {
    return (
      <section className="margin_top">
        <NavBar name="Appointments Page" />
        <div className="container">
          <div>
            Appointments Loading...
            <div className="spinner-border text-secondary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="margin_top">
      <NavBar name="My Appointments" />

      <h1>All my appointments:</h1>

      {appointments.list.map((data) => (
        <Link key={false} to="/Details" state={{ doc_id: data.id }}>

          <p>data</p>

        </Link>
      ))}

    </section>
  );
}

export default Appointments;
