/* eslint-disable no-alert */

// import { reduxForm, Field } from 'redux-form';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// const onSubmit = (values) => {
//   alert(JSON.stringify(values));
// };

// const required = (values) => {
//   if (!values || values === '') {
//     return 'This Field is required';
//   }
//   return undefined;
// };

function RegistrionPage() {
  return (
    <>
      <NavLink to="/LoginPage"> Login Page </NavLink>
      <h1>SignUp Page!</h1>
    </>
  );
}

export default (RegistrionPage);
