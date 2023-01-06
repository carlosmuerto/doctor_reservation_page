import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const { state } = location;

  if (state === null) {
    return (
      <div>Ups... something was wrong</div>
    );
  }

  return (
    <>
      <h1>Details Page</h1>

      <h4>{state.state.name}</h4>
      <h4>{state.state.address}</h4>
      <img src={state.state.img} alt={state.state.img} />

    </>
  );
};

export default Details;
