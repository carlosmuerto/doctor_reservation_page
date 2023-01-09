/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Cambiar función a arrow function
// https://react-hook-form.com/
class LoginPage extends Component {
  handleSubmit = (formValues) => {
    if (formValues.email === undefined || formValues.password === undefined) {
      alert('Please, put the information complete');
      console.log('Please, put the information complete');
    } else {
      console.log('Authorizathed');
      alert(`Welcome  ${formValues.name} your email: ${formValues.email} was submitted`);
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <>
        <NavLink to="./MainPage"> Main Page </NavLink>

        <form onSubmit={handleSubmit(this.handleSubmit)}>

          <div>
            <label>Name:</label>
            <Field name="name" type="text" component="input" />
          </div>

          <div>
            <label>Email:</label>
            <Field name="email" type="email" component="input" />
          </div>

          <div>
            <label>Password:</label>
            <Field name="password" type="password" component="input" />
          </div>

          <button type="submit">Login</button>

        </form>
      </>
    );
  }
}

LoginPage.propTypes = {
  handleSubmit: PropTypes.bool,
}.isRequired;

export default reduxForm({ form: 'loginForm' })(LoginPage);
