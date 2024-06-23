import React, { useEffect, useState } from 'react';
import '../styles/TrackFood.css';
import carbsImage from '../assets/carbohydrates.png';
import proteinsImage from '../assets/proteins.png';
import fatsImage from '../assets/fats.png';

const TrackFood = () => {
  const [consumptions, setConsumptions] = useState({
    carbohydrates: 0,
    proteins: 0,
    fats: 0,
  });

  useEffect(() => {
    const animateProgress = () => {
      setConsumptions({ carbohydrates: 70, proteins: 50, fats: 30 });
    };
    animateProgress();
  }, []);

  return (
    <div className="track-food-container">
      <h1>Food Consumption</h1>
      <div className="food-cards">
        <div className="food-card">
          <img src={carbsImage} alt="Carbohydrates" />
          <h2>Carbohydrates</h2>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${consumptions.carbohydrates}%` }}></div>
          </div>
          <p>{consumptions.carbohydrates}% consumed</p>
        </div>
        <div className="food-card">
          <img src={proteinsImage} alt="Proteins" />
          <h2>Proteins</h2>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${consumptions.proteins}%` }}></div>
          </div>
          <p>{consumptions.proteins}% consumed</p>
        </div>
        <div className="food-card">
          <img src={fatsImage} alt="Fats" />
          <h2>Fats</h2>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${consumptions.fats}%` }}></div>
          </div>
          <p>{consumptions.fats}% consumed</p>
        </div>
      </div>
    </div>
  );
};

export default TrackFood;
