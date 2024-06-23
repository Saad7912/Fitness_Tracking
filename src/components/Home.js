import React from 'react';
import DailyMacrosChart from './DailyMacrosChart';
import stepImage from '../assets/step_count.jpeg'; 
import exerciseImage from '../assets/Excercise.png'; 
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="main-content home-container">
      <h1>Welcome to Fitness Tracking</h1>
     
      <div className="chart-container">
        <h2>Daily Macros Consumption</h2>
        <DailyMacrosChart />
      </div>

      <div className="chart-container">
        <h2>Daily Step Count</h2>
        <img src={stepImage} alt="Step Count" className="chart-image" />
        <p>Today you have taken 10,000 steps!</p>
      </div>

      <div className="chart-container">
        <h2>Daily Exercise Time</h2>
        <img src={exerciseImage} alt="Exercise Time" className="chart-image" />
        <p>Today you have spent 45 minutes exercising!</p>
      </div>



     
    </div>
  );
};

export default Home;


