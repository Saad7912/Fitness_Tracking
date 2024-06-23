



import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/login';
import Signup from './components/Signup';
import Home from './components/Home';
import Profile from './components/Profile';
import SetGoals from './components/SetGoals';
import TrackFood from './components/TrackFood';
import TrackFitness from './components/TrackFitness';

const App = () => {
  const location = useLocation();
  const showNavbar = !['/', '/signup'].includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/set-goals" element={<SetGoals />} />
        <Route path="/track-food" element={<TrackFood />} />
        <Route path="/track-fitness" element={<TrackFitness />} />
      </Routes>
    </>
  );
};

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
