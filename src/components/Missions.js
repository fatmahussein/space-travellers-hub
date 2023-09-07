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
