import { useLocation } from 'react-router-dom';
import NavBar from '../NavBar/Navbar';

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

      <h4>{state.state.name}</h4>
      <h4>{state.state.address}</h4>
      <img src={state.state.img} alt={state.state.img} />

    </section>
  );
}

export default Details;
