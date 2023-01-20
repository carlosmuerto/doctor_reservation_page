import { Formik, Field, Form } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import loadingStatus from '../../redux/reduxConst';
import NavBar from '../NavBar/Navbar';
import * as AuthSlice from '../../redux/Auth/AuthSlice';
import { loadLocalStorage } from '../../redux/localStorage/storage';

function AddItem() {
  const dispatch = useDispatch();
  const auth = useSelector((store) => store.Auth);

  const onSubmit = async (values) => {
    const options = {
      headers: {
        accept: 'application/json',
      },
    };

    const data = new FormData();

    // eslint-disable-next-line no-console
    console.log('values:', values);

    data.append('doctor[name]', values.name);
    data.append('doctor[specialization]', values.specialization);
    data.append('doctor[photo]', values.photo);

    // eslint-disable-next-line no-restricted-syntax
    for (const pair of data.entries()) {
      // eslint-disable-next-line no-console
      console.log(`${pair[0]}, ${pair[1]}`);
    }

    const authorization = auth.user.token;
    const CurrentUserOptions = {
      headers: {
        ...options.headers,
        authorization,
      },
    };

    const answer = await axios.post(
      'http://localhost:3000/doctors',
      data,
      CurrentUserOptions,
    );

    // eslint-disable-next-line no-console
    console.log('answer:', answer);
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
    </section>
  );
}

export default AddItem;
