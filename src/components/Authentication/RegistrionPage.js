import { Formik, Field, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as AuthSlice from '../../redux/Auth/AuthSlice';
import loadingStatus from '../../redux/reduxConst';

const RegistrionPage = () => {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.Auth.user);
  const loading = useSelector((store) => store.Auth.loading);

  const onSubmit = async (values) => {
    dispatch(
      AuthSlice.signUp(values),
    );
  };

  const logOutOnClick = async () => {
    dispatch(
      AuthSlice.logOut(user),
    );
  };

  const initialValues = {
    userName: '',
    email: '',
    password: '',

  };

  return (
    <div>
      {
        loading === loadingStatus.succeeded
          ? `User: ${user.userName}`
          : null
      }
      <NavLink to="/MainPage" className="container"> Main Page </NavLink>
      {
        loading === loadingStatus.succeeded
          ? <button type="button" onClick={logOutOnClick}>Log Out</button>
          : <NavLink to="/RegistrionPage" className="container"> Registrion Page </NavLink>
      }
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <Form>
          <Field name="userName" type="text" placeholder="User Name" />
          <Field name="email" type="email" placeholder="eMail" />
          <Field name="password" type="password" placeholder="Password" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>

    </div>
  );
};

export default RegistrionPage;
