import React, { useState } from 'react';
import '../styles/SetGoals.css';

const SetGoals = () => {
  const [goals, setGoals] = useState({
    steps: '',
    calories: '',
    workoutDuration: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGoals({ ...goals, [name]: value });
  };

  const handleSave = () => {
    // Save the goals (you might want to save them in a database or local storage)
    alert('Goals saved!');
  };

  return (
    <div className="set-goals-container">
      <h1>Set Your Fitness Goals</h1>
      <div className="goal-inputs">
        <div className="goal-input">
          <label>Daily Steps:</label>
          <input type="number" name="steps" value={goals.steps} onChange={handleChange} />
        </div>
        <div className="goal-input">
          <label>Daily Calories Burned:</label>
          <input type="number" name="calories" value={goals.calories} onChange={handleChange} />
        </div>
        <div className="goal-input">
          <label>Daily Workout Duration (minutes):</label>
          <input type="number" name="workoutDuration" value={goals.workoutDuration} onChange={handleChange} />
        </div>
      </div>
      <button className="save-button" onClick={handleSave}>Save Goals</button>
      <div className="goals-summary">
        <h2>Your Goals</h2>
        <p>Daily Steps: {goals.steps}</p>
        <p>Daily Calories Burned: {goals.calories}</p>
        <p>Daily Workout Duration: {goals.workoutDuration} minutes</p>
      </div>
    </div>
  );
};

export default SetGoals;
