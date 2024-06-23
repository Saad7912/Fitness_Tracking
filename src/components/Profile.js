import React, { useState } from 'react';
import '../styles/Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    age: '',
    height: '',
    weight: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = () => {
    
    alert('Profile saved!');
  };

  return (
    <div className="profile-container">
      <h1>Edit Profile</h1>
      <div className="profile-inputs">
        <div className="profile-input">
          <label>Name:</label>
          <input type="text" name="name" value={profile.name} onChange={handleChange} />
        </div>
        <div className="profile-input">
          <label>Age:</label>
          <input type="number" name="age" value={profile.age} onChange={handleChange} />
        </div>
        <div className="profile-input">
          <label>Height (cm):</label>
          <input type="number" name="height" value={profile.height} onChange={handleChange} />
        </div>
        <div className="profile-input">
          <label>Weight (kg):</label>
          <input type="number" name="weight" value={profile.weight} onChange={handleChange} />
        </div>
      </div>
      <button className="save-button" onClick={handleSave}>Save Profile</button>
      <div className="profile-summary">
        <h2>Your Profile</h2>
        <p>Name: {profile.name}</p>
        <p>Age: {profile.age}</p>
        <p>Height: {profile.height} cm</p>
        <p>Weight: {profile.weight} kg</p>
      </div>
    </div>
  );
};

export default Profile;
