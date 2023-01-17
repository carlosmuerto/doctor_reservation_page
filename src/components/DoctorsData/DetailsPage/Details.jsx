import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { loadLocalStorage } from '../../../redux/localStorage/storage';
import loadingStatus from '../../../redux/reduxConst';
import NavBar from '../../NavBar/Navbar';
import * as DoctorsSlice from '../../../redux/Doctors/DoctorsSlice';
import * as CurrentUser from '../../../redux/Auth/CurrentUserSlice';

function Details() {
  const dispatch = useDispatch();
  const doctors = useSelector((store) => store.doctors);
  let doctor = null;
  const user = useSelector((store) => store.User.user);
  const UserLoading = useSelector((store) => store.User.loading);
  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    dispatch(
      CurrentUser.currentUser(loadLocalStorage()),
    );
  }, [dispatch]);

  useEffect(() => {
    if (UserLoading === loadingStatus.succeeded && doctors.loading !== loadingStatus.succeeded) {
      dispatch(
        DoctorsSlice.fetch(user),
      );
    }
  }, [dispatch, user, UserLoading, doctors]);

  if (doctors.loading !== loadingStatus.succeeded) {
    return (
      <div>Doctor is Loading</div>
    );
  }

  // eslint-disable-next-line prefer-destructuring
  doctor = doctors.list.filter((doc) => doc.id === state.doc_id)[0];

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
                UserLoading === loadingStatus.succeeded && user.role === 'admin'
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
