import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/HomePage/MainPage';
import Details from './components/DoctorsData/DetailsPage/Details';
import Appointments from './components/AppointmentsData/AppointmentsPage';
import LoginPage from './components/Authentication/LoginPage';
import RegistrionPage from './components/Authentication/RegistrionPage';
import SplashPage from './components/SplashPage/SplashPage';
import AddItem from './components/DoctorsData/AddItem';
import DeleteItem from './components/DoctorsData/DeleteItem';
import AppointmentsDetails from './components/AppointmentsData/DetailsPage/Details';
import AddAppointmentsForm from './components/AppointmentsData/AddAppointment';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/MainPage" exact element={<MainPage />} />
        <Route path="/Details" exact element={<Details />} />
        <Route path="/LoginPage" exact element={<LoginPage />} />
        <Route path="/RegistrionPage" exact element={<RegistrionPage />} />
        <Route path="/AppointmentsPage" exact element={<Appointments />} />
        <Route path="/AppointmentDetails" exact element={<AppointmentsDetails />} />
        <Route path="/AddAppointmentsForm" exact element={<AddAppointmentsForm />} />
        <Route path="/AddItem" exact element={<AddItem />} />
        <Route path="/DeleteItem" exact element={<DeleteItem />} />
        <Route path="/" exact element={<SplashPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
