import React from 'react';
import '../css/myProfile.css';

const MyProfile = () => (
  <div className="my-profile-container">
    <div>
      <h2 className="myprofile-header">My Missions</h2>
      <ul className="myprofile-list">
        <li>Mission Mars</li>
        <li>Mission Mars 2</li>
        <li>Mission Mars 3</li>
      </ul>
    </div>
    <div>
      <h2 className="myprofile-header">My Rockets</h2>
      <ul className="myprofile-list">
        <li>Falcon Rocket</li>
        <li>Falcon Rocket 9</li>
        <li>Falcon Heavy</li>
      </ul>
    </div>
  </div>
);

export default MyProfile;
