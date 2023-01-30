import { Formik, Field, Form } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import * as AuthSlice from '../../redux/Auth/AuthSlice';
import loadingStatus from '../../redux/reduxConst';

const RegistrionPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.Auth.user);
  const loading = useSelector((store) => store.Auth.loading);
  const alertSucceess = useSelector((store) => store.Auth.alert.green);
  const alertFail = useSelector((store) => store.Auth.alert.red);

  const onSubmit = async (values) => {
    dispatch(
      AuthSlice.signUp(values),
    );
  };

  useEffect(() => {
    if (loading === loadingStatus.succeeded) {
      navigate('/LoginPage');
    }
  }, [dispatch, loading, navigate]);

  const initialValues = {
    userName: '',
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
                : <NavLink to="/" className="container"> SignUp </NavLink>
            }
          </h2>
          <div className="">
            {
              loading === loadingStatus.succeeded
                ? null
                : <NavLink to="/LoginPage" className="container"> Login Page </NavLink>
            }
          </div>
        </div>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          <Form>
            <Field name="userName" type="text" placeholder="User Name" className="form-control" required />
            <Field name="email" type="email" placeholder="Email" className="form-control" required />
            <Field name="password" type="password" placeholder="Password" className="form-control" required />
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
      </div>
    </>
  );
};

export default RegistrionPage;
