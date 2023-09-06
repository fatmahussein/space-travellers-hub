import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../css/myProfile.css';
import { getMissions } from '../Redux/Missions/MissionSlice';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions.missions); // Use "missions" directly
  const reservedMissions = missions.filter((mission) => mission.reserved === true);
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, []);

  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className="my-profile-container">
      <div>
        <h2 className="myprofile-header">My Missions</h2>
        <ul className="myprofile-list">
          {reservedMissions.map((Mission) => (
            <li key={Mission.id}>{Mission.mission_name}</li>
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
