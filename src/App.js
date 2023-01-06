import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" exact element={<MainPage />} />
    </Routes>
  </Router>
);

export default App;
