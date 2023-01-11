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
    <section>
      <div>
        <h2>
          {
            loading === loadingStatus.succeeded
              ? `Welcome ${user.userName}!`
              : 'LogIn'
          }
        </h2>

        <div className="my_border">

          {
          loading === loadingStatus.succeeded
            ? null
            : <NavLink to="/RegistrionPage" className="container"> Registrion Page </NavLink>
          }
        </div>

      </div>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form className="my_border">
          <Field name="email" type="email" placeholder="eMail" required />
          <Field name="password" type="password" placeholder="Password" required />
          <button type="submit">Submit</button>
        </Form>
      </Formik>

    </section>
  );
};

export default LoginPage;
