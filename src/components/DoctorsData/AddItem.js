import { Formik, Field, Form } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadingStatus from '../../redux/reduxConst';
import NavBar from '../NavBar/Navbar';
import * as AuthSlice from '../../redux/Auth/AuthSlice';
import { loadLocalStorage } from '../../redux/localStorage/storage';

function AddItem() {
  const dispatch = useDispatch();
  const auth = useSelector((store) => store.Auth);

  const onSubmit = async (values) => {
    // eslint-disable-next-line no-console
    console.log(values);
    // const data = FormData.new();
    // data.append();
  };

  // const SubmitToAPI = async (values) => {
  //   console.log(values);
  // };

  const onPhotoFieldChange = (e) => {
    // setFieldValue('file', e.target[0]);
  };

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
        <Form>
          <Field name="name" type="text" placeholder="Doctor Name" className="form-control" required />
          <Field name="specialization" type="text" placeholder="specialization" className="form-control" required />
          <Field name="photo" type="file" placeholder="photo" className="form-control" required onChange={onPhotoFieldChange} />
          <button type="submit" className="container-fluid btn btn-outline-secondary">Submit</button>
        </Form>
      </Formik>
    </section>
  );
}

export default AddItem;
