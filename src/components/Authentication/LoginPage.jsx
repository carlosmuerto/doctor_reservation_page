import { Formik, Field, Form } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import * as AuthSlice from '../../redux/Auth/AuthSlice';
import { loadLocalStorage } from '../../redux/localStorage/storage';
import loadingStatus from '../../redux/reduxConst';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.Auth.user);
  const loading = useSelector((store) => store.Auth.loading);

  const onSubmit = async (values) => {
    dispatch(
      AuthSlice.logIn(values),
    );
  };

  useEffect(() => {
    const localStorageData = loadLocalStorage();
    if (localStorageData !== null) {
      try {
        if (localStorageData.token) {
          // eslint-disable-next-line no-console
          console.log('You are already login');
          navigate('/MainPage');
        }
      } catch {
        // eslint-disable-next-line no-console
        console.log('First LogIn please');
      }
    }
  }, [navigate]);

  useEffect(() => {
    if (loading === loadingStatus.succeeded) {
      navigate('/MainPage');
    }
  }, [dispatch, loading, navigate, user]);

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <>
      <section className="Splash_container d-flex align-items-center placeholder-wave background_blur" />

      <div className="card position-absolute top-50 start-50 translate-middle card_container">
        <div className="card-header d-flex justify-content-between">
          <h2 className="">
            {
              loading === loadingStatus.succeeded
                ? `Welcome ${user.userName}!`
                : <NavLink to="/" className="container"> LogIn </NavLink>
            }
          </h2>
          <div className="">
            {
            loading === loadingStatus.succeeded
              ? null
              : <NavLink to="/RegistrionPage" className=""> SignUp </NavLink>
            }
          </div>
        </div>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          <Form className="">
            <Field name="email" type="email" placeholder="Email" className="form-control" required />
            <Field name="password" type="password" placeholder="Password" className="form-control" required />
            <button type="submit" className="container-fluid btn btn-outline-secondary">Submit</button>
          </Form>
        </Formik>

      </div>
    </>
  );
};

export default LoginPage;
