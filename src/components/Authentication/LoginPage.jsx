/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */

// import React, { Component } from 'react';
import { Formik, Field, Form } from 'formik';
import { NavLink } from 'react-router-dom';

// class LoginPage extends Component {
//   handleSubmit = (formValues) => {
//     if (formValues.email === undefined || formValues.password === undefined) {
//       alert('Please, put the information complete');
//       console.log('Please, put the information complete');
//     } else {
//       console.log('Authorizathed');
//       alert(`Welcome! Your email: ${formValues.email} was submitted`);
//     }
//   }

//   render() {
//     const { handleSubmit } = this.props;

//     return (
//       <>
//         <NavLink to="/MainPage"> Main Page </NavLink>
//         <h1>Login Page!</h1>

//         <form onSubmit={handleSubmit(this.handleSubmit)}>

//           <div>
//             <label>Email:</label>
//             <Field name="email" type="email" component="input" />
//           </div>

//           <div>
//             <label>Password:</label>
//             <Field name="password" type="password" component="input" />
//           </div>

//           <button type="submit">Login</button>

//         </form>
//       </>
//     );
//   }
// }

// LoginPage.propTypes = {
//   handleSubmit: PropTypes.bool,
// }.isRequired;

// export default reduxForm({ form: 'loginForm' })(LoginPage);

// const input = ({ input, meta }) => (<input {...input} type="text" errorMessage={meta.error} />);

const LoginPage = () => {
  const onSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const jsonBody = ({
      User: values,
    });
    console.log(JSON.stringify(jsonBody, null, 2));
  };

  const nitialValues = {
    email: '',
    password: '',
  };

  return (
    <div>
      <NavLink to="/MainPage" className="container"> Main Page </NavLink>
      <NavLink to="/RegistrionPage" className="container"> Registrion Page </NavLink>
      <Formik
        initialValues={nitialValues}
        onSubmit={onSubmit}
      >
        <Form>
          <Field name="email" type="email" placeholder="eMail" />
          <Field name="password" type="password" placeholder="Password" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>

    </div>
  );
};

export default LoginPage;
