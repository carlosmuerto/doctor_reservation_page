import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import loadingStatus from '../../../redux/reduxConst';
import NavBar from '../../NavBar/Navbar';
import * as DoctorsSlice from '../../../redux/Doctors/DoctorsSlice';

function Details() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const doctors = useSelector((store) => store.doctors);
  const auth = useSelector((store) => store.Auth);
  const location = useLocation();
  const { state } = location;
  const alertFail = useSelector((store) => store.doctors.alert.red);

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

  const handledelete = (values) => {
    dispatch(
      DoctorsSlice.Delete({ DoctorId: values.doctor.id, user: auth.user }),
    );
  };

  // eslint-disable-next-line prefer-destructuring
  const doctor = doctors.list.filter((doc) => doc.id === state.doc_id)[0];

  return (
    <section className="margin_top">
      <NavBar name="Back" />

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
                      <input type="button" className="btn btn-danger" onClick={() => handledelete({ doctor })} value="Danger" />
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
      {
        alertFail.map((text) => (
          <div key={text} className="alert alert-danger text-center container" role="alert">
            <p>{text}</p>
          </div>
        ))
      }
    </section>
  );
}

export default Details;
