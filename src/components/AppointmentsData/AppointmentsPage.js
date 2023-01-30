/* eslint-disable max-len */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import loadingStatus from '../../redux/reduxConst';
import NavBar from '../NavBar/Navbar';
import * as AppointmentsSlice from '../../redux/Appointments/AppointmentsSlice';
import * as AuthSlice from '../../redux/Auth/AuthSlice';
import { loadLocalStorage } from '../../redux/localStorage/storage';

const Appointments = () => {
  const appointments = useSelector((store) => store.Appointments);
  const auth = useSelector((store) => store.Auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.loading !== loadingStatus.succeeded && appointments.loading !== loadingStatus.succeeded) {
      dispatch(
        AuthSlice.load(loadLocalStorage()),
      );
    }
  }, [dispatch, auth, appointments]);

  useEffect(() => {
    if (auth.loading === loadingStatus.succeeded) {
      dispatch(
        AppointmentsSlice.fetch(auth.user),
      );
    }
  }, [dispatch, auth]);

  const handledelete = (values) => {
    dispatch(
      AppointmentsSlice.Delete({ AppointmentId: values.data.id, user: auth.user }),
    );
    window.location.reload(true);
  };

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
      <NavBar name="Main Page" />

      <h1>All my appointments:</h1>

      {appointments.list.map((data) => (
        <section key={data.id} className="my_border">
          <Link to="/AppointmentDetails" state={{ AppointmentData: data }}>
            <div>
              <p>
                ID:
                {' '}
                {data.id}
              </p>

              <p>
                ID_doctor:
                {' '}
                {data.doctor_id}
              </p>

              <p>
                Description:
                {' '}
                {data.description}
              </p>

              <p>
                Appointment Date:
                {' '}
                {data.datetime_of_appointment}
              </p>

              <p>
                This appointment was created:
                {' '}
                {data.created_at}
              </p>
            </div>
          </Link>

          <div className="col-12">
            <input type="button" className="btn btn-danger" onClick={() => handledelete({ data })} value="Danger" />
          </div>

        </section>
      ))}

    </section>
  );
};

export default Appointments;
