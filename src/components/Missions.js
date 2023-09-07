// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchMissions } from '../Redux/Missions/MissionSlice';
// import '../styles/css/Missions.css';
// import MissionCard from './MissionCard';

// const Missions = () => {
//   const dispatch = useDispatch();
//   const { missions, pending, error } = useSelector((store) => store.missions);
//   useEffect(() => {
//     if (missions.length < 1) {
//       dispatch(fetchMissions());
//     }
//   }, [dispatch, missions.length]);
//   let content;
//   if (!pending && !error && Array.isArray(missions)) {
//     content = (
//       <table className="missions-table">
//         <tbody>
//           <tr key="missions">
//             <th>Mission</th>
//             <th>Description</th>
//             <th>Status</th>
//             <th>{' '}</th>
//           </tr>
//           {missions.map((mission) => (
//             <tr key={mission.id}>
//               <MissionCard props={mission} />
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   }
//   if (pending) {
//     content = (
//       <h1>Fetching Missions</h1>
//     );
//   }
//   if (error) {
//     content = (
//       <h1>Error occured while fetching missions</h1>
//     );
//   }
//   return (
//     <section className="missions">
//       {content}
//     </section>
//   );
// };
// export default Missions;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchMissions } from '../Redux/Missions/MissionSlice';
import '../styles/css/Missions.css';
import { getMissions, reserveMission } from '../Redux/Missions/MissionSlice';
const Missions = () => {
  const { isLoading, missions } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  // to handle the styling changes
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  // Function to handle joining/leaving a mission
  // const handleMissionAction = (missionId) => {
  //   // const JoinBtn = document.getElementsByClassName('joinBtn');
  //   // handleClick();
  //   // JoinBtn.classList.toggle('clicked');
  //   dispatch(handleClick({ missionId }));
  //   // Update the reserved flag in the Redux state
  //   dispatch(reserveMission({ missionId }));
  // };

  // Function to handle joining/leaving a mission
  const handleMissionAction = (mission) => {
    // Update the reserved flag in the Redux state
    dispatch(reserveMission({ missionId: mission.mission_id }));
  };

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="MissionsComponent">
      <table className="missions-table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {missions.length > 0 ? (
            missions.map((mission) => (
              <tr key={mission.mission_id}>
                <td>{mission.mission_name}</td>
                <td className="description">{mission.description}</td>
                <td>
                  <p className="status">{mission.reserved ? 'Active Member' : 'NOT A MEMBER'}</p>
                </td>
                <td>
                  <button
                    type="button"
                    className={`joinBtn ${mission.reserved ? 'clicked' : ''}`}
                    onClick={() => {
                      handleMissionAction(mission);
                    }}
                  >
                    {mission.reserved ? 'Leave Mission' : 'Join Mission'}
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No Missions available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default Missions;
