import Row from 'react-bootstrap/Row';
import { NavLink } from 'react-router-dom';
import Col from 'react-bootstrap/Col';

function SplashPage() {
  return (
    <>
      <section className="Splash_container d-flex align-items-center background_blur placeholder-wave" />

      <div className="position-absolute top-50 start-50 translate-middle">
        <Row className="pb-5">
          <Col className=" d-flex justify-content-center align-items-center text-center">
            <h1 className="app_title">Doctor&apos;s App!</h1>
          </Col>
        </Row>

        <Row className="pt-5">
          <Col className=" d-flex justify-content-center align-items-center">
            <NavLink className="btn btn-light btn-lg" to="/LoginPage"> Login </NavLink>
          </Col>

          <Col className=" d-flex justify-content-center align-items-center">
            <NavLink className="btn btn-light btn-lg" to="/RegistrionPage"> SignUp </NavLink>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default SplashPage;
