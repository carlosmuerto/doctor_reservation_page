import { NavLink } from 'react-router-dom';

function SplashPage() {
  return (
    <section className="container">
      <h1>Doctor App!</h1>
      <NavLink to="/LoginPage" className="container"> Login Page </NavLink>
      <NavLink to="/RegistrionPage" className="container"> Registrion Page </NavLink>
    </section>
  );
}

export default SplashPage;
