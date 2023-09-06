import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from './MissionSlice';
const MissionsContainer = () => {
  const { isLoading } = useSelector((state) => state.missions);

  const Missions = useSelector((state) => state.missions.missions);

  //   console.log(Missions);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Missions.length > 0 ? (
            Missions.map((mission) => (
              <tr key={mission.mission_id}>
                <td>{mission.mission_name}</td>
                <td className='description'>{mission.description}</td>
                <td>Status</td>
                <td>empty</td> 
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No Missions available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MissionsContainer;
