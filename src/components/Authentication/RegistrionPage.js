/* eslint-disable no-alert */

import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const onSubmit = (values) => {
  alert(JSON.stringify(values));
};

const required = (values) => {
  if (!values || values === '') {
    return 'This Field is required';
  }
  return undefined;
};

const RegistrionPage = ({ handleSubmit, valid }) => (
  <>
    <NavLink to="/LoginPage"> Login Page </NavLink>
    <h1>SignUp Page!</h1>

    <form onSubmit={handleSubmit}>

      <div>
        {/* <label>Name:</label> */}
        <Field name="name" type="text" component="input" validate={required} placeholder="Name:" />
      </div>

      <div>
        {/* <label>Email:</label> */}
        <Field name="email" type="email" component="input" validate={required} placeholder="Email:" />
      </div>

      <div>
        {/* <label>Password:</label> */}
        <Field name="password" type="password" component="input" validate={required} placeholder="Password:" />
      </div>

      <button disabled={!valid} type="submit">Register</button>

    </form>
  </>
);

RegistrionPage.propTypes = {
  handleSubmit: PropTypes.bool,
}.isRequired;

export default reduxForm({
  form: 'RegistrionForm',
  onSubmit,
})(RegistrionPage);
