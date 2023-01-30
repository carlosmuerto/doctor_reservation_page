import { Formik, Field, Form } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadingStatus from '../../redux/reduxConst';
import NavBar from '../NavBar/Navbar';
import * as AuthSlice from '../../redux/Auth/AuthSlice';
import { loadLocalStorage } from '../../redux/localStorage/storage';
import * as DoctorsSlice from '../../redux/Doctors/DoctorsSlice';

function AddItem() {
  const dispatch = useDispatch();
  const auth = useSelector((store) => store.Auth);
  const doctors = useSelector((store) => store.doctors);

  const onSubmit = async (values) => {
    const data = new FormData();
    data.append('doctor[name]', values.name);
    data.append('doctor[specialization]', values.specialization);
    data.append('doctor[photo]', values.photo);

    dispatch(
      DoctorsSlice.Add({ data, user: auth.user }),
    );
  };

  // const SubmitToAPI = async (values) => {
  //   console.log(values);
  // };

  const initialValues = {
    name: '',
    specialization: '',
    photo: '',
  };

  useEffect(() => {
    if (auth.loading !== loadingStatus.succeeded && auth.loading !== loadingStatus.failed) {
      dispatch(
        AuthSlice.load(loadLocalStorage()),
      );
    }
  }, [dispatch, auth]);

  return (
    <section className="margin_top">
      <NavBar name="Back" />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {({ setFieldValue }) => (
          <Form>
            <Field name="name" type="text" placeholder="Doctor Name" className="form-control" required />
            <Field name="specialization" type="text" placeholder="specialization" className="form-control" required />
            <input
              name="photo"
              type="file"
              placeholder="photo"
              className="form-control"
              required
              onChange={(e) => {
                setFieldValue('photo', e.target.files[0]);
              }}
            />
            <button type="submit" className="container-fluid btn btn-outline-secondary">Submit</button>
          </Form>
        )}
      </Formik>
      {
        doctors.alert.green.map((text) => (
          <div key={text} className="alert alert-success text-center" role="alert">
            <p key={text}>{text}</p>
          </div>
        ))
      }
      {
        doctors.alert.red.map((text) => (
          <div key={text} className="alert alert-danger text-center" role="alert">
            <p>{text}</p>
          </div>
        ))
      }
    </section>
  );
}

export default AddItem;
