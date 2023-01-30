/* eslint-disable max-len */
import { Formik, Field, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import NavBar from '../NavBar/Navbar';
import * as AppointmentsSlice from '../../redux/Appointments/AppointmentsSlice';
import loadingStatus from '../../redux/reduxConst';
import { loadLocalStorage } from '../../redux/localStorage/storage';
import * as AuthSlice from '../../redux/Auth/AuthSlice';
import * as DoctorsSlice from '../../redux/Doctors/DoctorsSlice';

const AddAppointmentsForm = () => {
  const dispatch = useDispatch();
  const auth = useSelector((store) => store.Auth);
  const alertSucceess = useSelector((store) => store.Appointments.alert.green);
  const alertFail = useSelector((store) => store.Appointments.alert.red);
  const doctors = useSelector((store) => store.doctors);

  useEffect(() => {
    if (auth.loading !== loadingStatus.succeeded) {
      dispatch(
        AuthSlice.load(loadLocalStorage()),
      );
    }
  }, [dispatch, auth]);

  useEffect(() => {
    if (auth.loading === loadingStatus.succeeded && doctors.loading !== loadingStatus.succeeded) {
      dispatch(
        DoctorsSlice.fetch(auth.user),
      );
    }
  }, [dispatch, auth, doctors]);

  const initialValues = {
    doctorId: '',
    description: '',
    time: '',
  };

  const onSubmit = async (values) => {
    const resqObj = {
      ...values,
      time: `${values.dateIn} ${values.timeIn}`,
    };

    dispatch(
      AppointmentsSlice.Add({ ...resqObj, user: auth.user }),
    );
  };

  return (
    <section className="margin_top">
      <NavBar name="Main Page" />
      <h1>Add a new appointment</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form className="">
          <Field as="select" name="doctorId" type="number" placeholder="Id del doctor" className="form-control" required>
            {doctors.list.map((doc) => (
              <option key={`doc-option-${doc.id}`} value={doc.id}>{`${doc.specialization}, ${doc.name}`}</option>
            ))}
          </Field>
          <Field name="description" type="text" placeholder="Description" className="form-control" required />
          <Field name="dateIn" type="date" placeholder="Date of the appointment" className="form-control" required />
          <Field name="timeIn" type="time" placeholder="Time of the appointment" className="form-control" required />
          <button type="submit" className="container-fluid btn btn-outline-secondary">Submit</button>
        </Form>
      </Formik>
      {
        alertSucceess.map((text) => (
          <div key={text} className="alert alert-success text-center" role="alert">
            <p key={text}>{text}</p>
          </div>
        ))
      }
      {
        alertFail.map((text) => (
          <div key={text} className="alert alert-danger text-center" role="alert">
            <p>{text}</p>
          </div>
        ))
      }
    </section>
  );
};

export default AddAppointmentsForm;
