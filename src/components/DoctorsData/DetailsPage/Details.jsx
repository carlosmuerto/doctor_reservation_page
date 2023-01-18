import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import loadingStatus from '../../../redux/reduxConst';
import NavBar from '../../NavBar/Navbar';
import * as DoctorsSlice from '../../../redux/Doctors/DoctorsSlice';

function Details() {
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

  if (doctors.loading !== loadingStatus.succeeded || auth.loading !== loadingStatus.succeeded) {
    return (
      <section className="margin_top">
        <NavBar name="Details Page" />
        <div className="container">
          <div>Doctor is Loading</div>
        </div>
      </section>
    );
  }

  // eslint-disable-next-line prefer-destructuring
  const doctor = doctors.list.filter((doc) => doc.id === state.doc_id)[0];

  return (
    <section className="margin_top">
      <NavBar name="Details Page" />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8 col-sm-2">
            <img src={doctor.photo} alt={doctor.name} className="img-fluid" />
          </div>
          <div className="col-8 col-sm-10">
            <div className="row">
              <div className="col-12">
                <h1>{doctor.name}</h1>
              </div>
              <div className="col-12">
                <h3>{doctor.specialization}</h3>
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
              <div className="col-12">
                <h2>My Appointment</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Details;
