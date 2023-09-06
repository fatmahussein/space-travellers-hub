import React from 'react';
import { useSelector } from 'react-redux';
import '../css/myProfile.css';

const MyProfile = () => {
  const { Missions } = useSelector((state) => state.missions.missions);
  console.log(Missions);
  const reservedMissions = Missions.filter((Mission) => Mission.reserved === true);

  <div className="my-profile-container">
    <div>
      <h2 className="myprofile-header">My Missions</h2>
      <ul className="myprofile-list">
        {reservedMissions.map((Mission) => (
          <li key={Mission.id}>{Mission.name}</li>
        ))}
      </ul>
    </div>
    <div>
      <h2 className="myprofile-header">My Missions</h2>
      <ul className="myprofile-list">
        <li>Falcon Rocket</li>
        <li>Falcon Rocket 9</li>
        <li>Falcon Heavy</li>
      </ul>
    </div>
  </div>;
};

export default MyProfile;
