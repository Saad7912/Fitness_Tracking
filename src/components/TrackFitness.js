import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // Required for Chart.js to work properly
import '../styles/TrackFitness.css';

const TrackFitness = () => {
  const [workouts, setWorkouts] = useState([]);
  const [workout, setWorkout] = useState({ exercise: '', sets: '', reps: '', weight: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkout({ ...workout, [name]: value });
  };

  const handleAddWorkout = () => {
    setWorkouts([...workouts, workout]);
    setWorkout({ exercise: '', sets: '', reps: '', weight: '' });
  };

  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'], // Sample labels
    datasets: [
      {
        label: 'Weight Lifted (lbs)',
        data: [50, 70, 150, 200], // Sample data
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        ticks: {
          color: 'white', // Set the x-axis text color to white
        },
      },
      y: {
        ticks: {
          color: 'white', // Set the y-axis text color to white
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white', // Set the legend text color to white
        },
      },
    },
  };

  return (
    <div className="track-fitness-container">
      <h1>Track Fitness</h1>
      <div className="workout-log">
        <h2>Workout Log</h2>
        <input type="text" name="exercise" placeholder="Exercise" value={workout.exercise} onChange={handleChange} />
        <input type="number" name="sets" placeholder="Sets" value={workout.sets} onChange={handleChange} />
        <input type="number" name="reps" placeholder="Reps" value={workout.reps} onChange={handleChange} />
        <input type="number" name="weight" placeholder="Weight" value={workout.weight} onChange={handleChange} />
        <div className="center-button">
          <button onClick={handleAddWorkout}>Add Workout</button>
        </div>
        <div className="workout-list">
          {workouts.map((w, index) => (
            <div key={index} className="workout-item">
              <span>{w.exercise}</span>
              <span>{w.sets} sets</span>
              <span>{w.reps} reps</span>
              <span>{w.weight} lbs</span>
            </div>
          ))}
        </div>
      </div>
      <div className="progress-charts">
        <h2>Progress Charts</h2>
        <Line data={data} options={options} />
      </div>
      <div className="goals-summary">
        <h2>Goals Summary</h2>
        <p>Your progress has been great! You have increased your weight lifted consistently over the past weeks. Keep up the good work and aim to increase your weights gradually to avoid injury.</p>
      </div>
    </div>
  );
};

export default TrackFitness;
