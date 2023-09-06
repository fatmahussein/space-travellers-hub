import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions, reserveMission } from './MissionSlice'; // Import the action

const MissionsContainer = () => {
  const { isLoading, missions } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  const [status, setStatus] = useState({}); // State to track status for each mission


  // Function to handle joining/leaving a mission
  const handleMissionAction = (missionId) => {
    if (status[missionId] === 'Active Member') {
      // Leave the mission
      setStatus({ ...status, [missionId]: 'NOT A MEMBER' });
      // Update the reserved flag in the Redux state
      dispatch(reserveMission({ missionId, reserved: true }));
    } else {
      // Join the mission
      setStatus({ ...status, [missionId]: 'Active Member' });
      // Update the reserved flag in the Redux state
      dispatch(reserveMission({ missionId, reserved: false }));
    }
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
                  <p className="status">{status[mission.mission_id] || 'NOT A MEMBER'}</p>{' '}
                </td>
                <td>
                  <button
                    type="button"
                    className="joinBtn"
                    onClick={() =>
                      handleMissionAction(mission.mission_id, !(status[mission.mission_id] === 'Active Member'))
                    }
                  >
                    {status[mission.mission_id] === 'Active Member' ? 'Leave Mission' : 'Join Mission'}
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

export default MissionsContainer;
