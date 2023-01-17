import './styles/App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/HomePage/MainPage';
import Details from './components/DoctorsData/DetailsPage/Details';
import Reservation from './components/ReservationPage/ReservationPage';
import LoginPage from './components/Authentication/LoginPage';
import RegistrionPage from './components/Authentication/RegistrionPage';
import SplashPage from './components/SplashPage/SplashPage';
import AddItem from './components/DoctorsData/AddItem';
import DeleteItem from './components/DoctorsData/DeleteItem';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/MainPage" exact element={<MainPage />} />
        <Route path="/Details" exact element={<Details />} />
        <Route path="/LoginPage" exact element={<LoginPage />} />
        <Route path="/RegistrionPage" exact element={<RegistrionPage />} />
        <Route path="/ReservationPage" exact element={<Reservation />} />
        <Route path="/AddItem" exact element={<AddItem />} />
        <Route path="/DeleteItem" exact element={<DeleteItem />} />
        <Route path="/" exact element={<SplashPage />} />
      </Routes>
    </Router>
  );
}

export default App;
