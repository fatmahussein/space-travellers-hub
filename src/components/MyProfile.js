import React from 'react';
import { useSelector } from 'react-redux';
import '../css/myProfile.css';

const MyProfile = () => {
  const { Missions } = useSelector((state) => state.missions.missions);
  const reservedMissions = Missions.filter((Mission) => Mission.reserved === true);

  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className="my-profile-container">
      <div>
        <h2 className="myprofile-header">My Missions</h2>
        <ul className="myprofile-list">
          {reservedMissions.map((Mission) => (
            <li key={Mission.id}>{Mission.name}</li>
          ))}
        </ul>
      </div>
      <div className="myRockets">
        <h2 className="myprofile-header">My Rockets</h2>
        <ul className="myprofile-list">

          {reservedRockets.map((rocket) => (
            <li key={rocket.id}>{rocket.name}</li>
          ))}

        </ul>
      </div>
      <div className="myDragons">
        <h2 className="myprofile-header">My Dragons</h2>
        <ul className="myprofile-list">
          <li>Dragon</li>
          <li>Dragon</li>
          <li>Dragon</li>
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
