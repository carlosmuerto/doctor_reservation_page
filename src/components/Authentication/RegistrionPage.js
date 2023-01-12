import { Formik, Field, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import * as AuthSlice from '../../redux/Auth/AuthSlice';
import loadingStatus from '../../redux/reduxConst';

const RegistrionPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const user = useSelector((store) => store.Auth.user);
  const loading = useSelector((store) => store.Auth.loading);

  const onSubmit = async (values) => {
    dispatch(
      AuthSlice.signUp(values),
      navigate('/LogInPage'),
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
    userName: '',
    email: '',
    password: '',

  };

  return (
    <div>

      {
        loading === loadingStatus.succeeded
          ? null
          : <NavLink to="/LoginPage" className="container"> Login Page </NavLink>
      }
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form>
          <Field name="userName" type="text" placeholder="User Name" required autofocus="autofocus" />
          <Field name="email" type="email" placeholder="eMail" required />
          <Field name="password" type="password" placeholder="Password" required />
          <button type="submit">Submit</button>
        </Form>
      </Formik>

    </div>
  );
};

export default RegistrionPage;
