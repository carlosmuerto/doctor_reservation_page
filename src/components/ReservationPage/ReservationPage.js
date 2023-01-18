import { useEffect } from 'react';
import NavBar from '../NavBar/Navbar';

function Reservation() {
  useEffect(() => {

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
