import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../css/myProfile.css';
import { getMissions } from '../Redux/MissionSlice'; 

const MyProfile = () => {
  const missions = useSelector((state) => state.missions.missions); 
  const reservedMissions = missions.filter((mission) => mission.reserved === true);
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, []);

  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  let missionList;
  let rocketList;
  if (reserved.length > 0) {
    missionList = (
      <ul className="missions-list">
        {reserved.map((mission) => (
          <li key={mission.id}>{mission.name}</li>
        ))}
      </ul>
    );
  } else {
    missionList = (
      <p className="empty-profile-msg">You have not joined any missions yet</p>
    );
  }
  if (reservedRockets.length > 0) {
    rocketList = (
      <ul className="rockets-list">
        {reservedRockets.map((rocket) => (
          <li key={rocket.id}>{rocket.name}</li>
        ))}
      </ul>
    );
  } else {
    rocketList = (
      <p className="empty-profile-msg">You have not reserved any Rockets yet</p>
    );
  }
  return (
    <div className="my-profile">
      <div className="my-missions">
        <p className="missions-headline">My Missions</p>
        {missionList}
      </div>
      <div className="myDragons">
        <h2 className="myprofile-header">My Dragons</h2>
        <ul className="myprofile-list">
          <li>Dragon</li>
          <li>Dragon</li>
          <li>Dragon</li>
        </ul>
      </div>
      <div className="my-dragons">
        <p className="dragons-headline">My Dragons</p>
        {dragonList}
      </div>
    </div>
  );
};

export default MyProfile;
