import { useSelector } from 'react-redux';
import '../css/myProfile.css';

const MyProfile = () => {
  const { missions } = useSelector(((state) => state.missions));
  const reserved = missions.filter((mission) => mission.reserved === true);
  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  const { dragons } = useSelector((state) => state.dragons);
  const reservedDragons = dragons.filter((dragon) => dragon.reserved === true);
  let missionList;
  let rocketList;
  let dragonList;
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
  if (reservedDragons.length > 0) {
    dragonList = (
      <ul className="dragons-list">
        {reservedDragons.map((dragon) => (
          <li key={dragon.id}>{dragon.name}</li>
        ))}
      </ul>
    );
  } else {
    dragonList = (
      <p className="empty-profile-msg">You have not reserved any Dragons yet</p>
    );
  }
  return (
    <div className="my-profile">
      <div className="my-missions">
        <p className="missions-headline">My Missions</p>
        {missionList}
      </div>
      <div className="my-rockets">
        <p className="rockets-headline">My Rockets</p>
        {rocketList}
      </div>
      <div className="my-dragons">
        <p className="dragons-headline">My Dragons</p>
        {dragonList}
      </div>
    </div>
  );
};
export default MyProfile;
