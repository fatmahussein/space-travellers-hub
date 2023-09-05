import React from 'react';
import { useSelector } from 'react-redux';
import '../css/myProfile.css';

const MyProfile = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className="my-profile-container">
      <div className="missions">
        <h2 className="myprofile-header">My Missions</h2>
        <ul className="myprofile-list">
          <li>Mission Mars</li>
          <li>Mission Mars 2</li>
          <li>Mission Mars 3</li>
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
