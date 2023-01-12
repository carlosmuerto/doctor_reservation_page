import '../../styles/App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getData } from '../../redux/Greeting/Greeting';
import ItemsList from '../DoctorsData/ItemObject';
import NavBar from '../NavBar/Navbar';

function MainPage() {
  const dispatch = useDispatch();
  const greetingShow = useSelector((store) => store.doctorsData);

  useEffect(() => {
    if (!greetingShow.length) {
      dispatch(getData());
    }
  });

  return (
    <section className="margin_top">
      <NavBar name="Home Page" />

      <ul>

        {greetingShow.map((data) => (
          <li key={data.name} className="container">

            <Link to="/Details" state={{ state: data }}>

              <ItemsList data={data} id={data.name} />

            </Link>

          </li>
        ))}

      </ul>

    </section>
  );
}

export default MainPage;
