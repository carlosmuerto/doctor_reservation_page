import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import NavBar from '../NavBar/Navbar';
// import { loadState } from '../../redux/localStorage/storage';
// import * as CurrentUserSlice from '../../redux/Auth/CurrentUserSlice';

function Reservation() {
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(
    //   CurrentUserSlice.currentUser(loadState()),
    // );
  });

  return (
    <section className="margin_top">
      <NavBar name="My Reservations" />
      <h1>All my Reservations here</h1>
      <ul>
        <li>Reservation 1</li>
        <li>Reservation 1</li>
        <li>Reservation 1</li>
        <li>Reservation 1</li>
        <li>Reservation 1</li>
        <li>Reservation 1</li>
      </ul>
    </section>
  );
}

export default Reservation;
