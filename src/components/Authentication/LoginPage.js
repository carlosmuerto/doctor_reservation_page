/* eslint-disable no-alert */

import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
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

const onSubmit = (values) => {
  alert(JSON.stringify(values));
};

const required = (values) => {
  if (!values || values === '') {
    return 'This Field is required';
  }

  return undefined;
};

const LoginPage = ({ handleSubmit, valid }) => (
  <>
    <NavLink to="/MainPage" className="container"> Main Page </NavLink>
    <NavLink to="/RegistrionPage" className="container"> Login Page </NavLink>

    <h1>Login Page!</h1>

    <form onSubmit={handleSubmit}>

      <div>
        {/* <label>Email:</label> */}
        <Field name="email" type="email" component="input" validate={required} placeholder="Email:" />
      </div>

      <div>
        {/* <label>Password:</label> */}
        <Field name="password" type="password" component="input" validate={required} placeholder="Password:" />
      </div>

      <button disabled={!valid} type="submit">Login</button>

    </form>
  </>
);

LoginPage.propTypes = {
  handleSubmit: PropTypes.bool,
}.isRequired;

export default reduxForm({
  form: 'loginForm',
  onSubmit,
})(LoginPage);
