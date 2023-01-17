import { useLocation } from 'react-router-dom';
import NavBar from '../../NavBar/Navbar';

function Details() {
  const location = useLocation();
  const { state } = location;

  if (state === null) {
    return (
      <div>Ups... something was wrong</div>
    );
  }

  return (
    <section className="margin_top">
      <NavBar name="Details Page" />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8 col-sm-2">
            <img src={state.state.photo} alt={state.state.name} className="img-fluid" />
          </div>
          <div className="col-8 col-sm-10">
            <div className="row">
              <div className="col-12">
                <h1>{state.state.name}</h1>
              </div>
              <div className="col-12">
                <h3>{state.state.specialization}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Details;
