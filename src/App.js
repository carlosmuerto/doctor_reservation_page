import './styles/App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/HomePage/MainPage';
import Details from './components/DetailsPage/Details';
import Reservation from './components/ReservationPage/ReservationPage';
import LoginPage from './components/Authentication/LoginPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/MainPage" exact element={<MainPage />} />
      <Route path="/Details" exact element={<Details />} />
      <Route path="/" exact element={<LoginPage />} />
      <Route path="/ReservationPage" exact element={<Reservation />} />
    </Routes>
  </Router>
);

export default App;
