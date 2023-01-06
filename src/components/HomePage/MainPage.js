import '../../styles/App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { getMessage } from '../../redux/download/dataSlice';
// import Details from '../DetailsPage/Details';
import ItemsList from './ItemObject';

const MainPage = () => {
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

      <div>
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
