import React from 'react';
import { useSelector } from 'react-redux';
import '../css/myProfile.css';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions.missions); // Use "missions" directly
  console.log(missions);
  const reservedMissions = missions.filter((mission) => mission.reserved === true);
  console.log(reservedMissions);

  return (
    <div className="my-profile-container">
      <div>
        <h2 className="myprofile-header">My Missions</h2>
        <ul className="myprofile-list">
          {reservedMissions.map((mission) => (
            <li key={mission.mission_id}>{mission.mission_name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="myprofile-header">Other Missions</h2>
        <ul className="myprofile-list">
          <li>Falcon Rocket</li>
          <li>Falcon Rocket 9</li>
          <li>Falcon Heavy</li>
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
