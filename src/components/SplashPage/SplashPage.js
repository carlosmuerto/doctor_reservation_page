import { NavLink } from 'react-router-dom';

const SplashPage = () => (
  <>
    <h1>Splash Page!</h1>
    <NavLink to="/LoginPage" className="container"> Login Page </NavLink>
    <NavLink to="/RegistrionPage" className="container"> Registrion Page </NavLink>

  </>
);

export default SplashPage;
