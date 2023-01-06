import './styles/App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/HomePage/MainPage';
import Details from './components/DetailsPage/Details';
import ReservationPage from './components/Reservations/ReservationPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" exact element={<MainPage />} />
      <Route path="/Details" exact element={<Details />} />
      <Route path="/ReservationPage" exact element={<ReservationPage />} />
    </Routes>
  </Router>
);

export default App;
