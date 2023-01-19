/* eslint-disable max-len */
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import NavBar from '../NavBar/Navbar';

const initialValues = {
  doctor_id: '',
  description: '',
  datetime_of_appointment: '',
};

const AddAppointmentsForm = () => {
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    dispatch(
      //
    );
    console.log(values);
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
          <Field name="doctor_id" type="number" placeholder="Id del doctor" className="form-control" required />
          <Field name="description" type="text" placeholder="Description" className="form-control" required />
          <Field name="datetime_of_appointment" type="date" placeholder="Date of the appointment" className="form-control" required />
          <button type="submit" className="container-fluid btn btn-outline-secondary">Submit</button>
        </Form>
      </Formik>
    </section>
  );
};

export default AddAppointmentsForm;
