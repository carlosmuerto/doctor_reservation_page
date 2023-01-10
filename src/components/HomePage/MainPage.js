import '../../styles/App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import ItemsList from './ItemObject';
import { getMessage } from '../../redux/Greeting/Greeting';

const MainPage = () => {
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  const greetingShow = useSelector((store) => store.doctorsData);

  useEffect(() => {
    if (!greetingShow.length) {
      dispatch(getMessage());
    }
  });

  return (
    <div className="container">
      <h1>Home page</h1>

      <div className="container">
        <p>Temporal Navbar</p>
        <NavLink to="/ReservationPage"> Reservation Page </NavLink>
      </div>

      <ul>

        {greetingShow.map((data) => (
          <li key={data.name} className="container">

            <Link to="/Details" state={{ state: data }}>

              <ItemsList data={data} id={data.name} />

            </Link>

          </li>
        ))}

      </ul>

    </div>
  );
};

export default MainPage;
