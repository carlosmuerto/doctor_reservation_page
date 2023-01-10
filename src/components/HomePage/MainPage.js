import '../../styles/App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMessage } from '../../redux/download/dataSlice';
import ItemsList from './ItemObject';
// import TestingApp from '../../redux/download/signUpSlice';
import NavBar from '../NavBar/Navbar';

function MainPage() {
  const dispatch = useDispatch();
  const greetingShow = useSelector((store) => store.doctorsData);

  useEffect(() => {
    if (!greetingShow.length) {
      dispatch(getMessage());
    }
  });

  return (
    <>
      <NavBar name="Home Page" />

      {/* <TestingApp /> */}

      <ul>

        {greetingShow.map((data) => (
          <li key={data.name} className="container">

            <Link to="/Details" state={{ state: data }}>

              <ItemsList data={data} id={data.name} />

            </Link>

          </li>
        ))}

      </ul>

    </>
  );
}

export default MainPage;
