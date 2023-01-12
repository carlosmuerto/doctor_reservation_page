import { Formik, Field, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import * as AuthSlice from '../../redux/Auth/AuthSlice';
import loadingStatus from '../../redux/reduxConst';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.Auth.user);
  const loading = useSelector((store) => store.Auth.loading);

  const onSubmit = async (values) => {
    dispatch(
      AuthSlice.logIn(values),
      navigate('/MainPage'),
    );
  };

  // ? <button type="button" onClick={logOutOnClick}>Log Out</button>
  //
  // const logOutOnClick = async () => {
  //   dispatch(
  //     AuthSlice.logOut(user),
  //   );
  // };

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
            <Field name="email" type="email" placeholder="eMail" className="form-control" required autofocus="autofocus" />
            <Field name="password" type="password" placeholder="Password" className="form-control" required />
            <button type="submit" className="container btn btn-outline-secondary">Submit</button>
          </Form>
        </Formik>

      </div>
    </>
  );
};

export default LoginPage;
