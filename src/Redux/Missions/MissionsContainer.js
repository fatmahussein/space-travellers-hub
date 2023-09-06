import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from './MissionSlice';

const MissionsContainer = () => {
  const { isLoading } = useSelector((state) => state.missions);

  const Missions = useSelector((state) => state.missions.missions);

  console.log(Missions);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="MissionsComponent">
      {Missions.length > 0 ? (
        <ul>
          {Missions.map((Mission) => (
            <li key={Mission.mission_id} className="Mission">
              <div className="MissionDetails">
                <h2 className="MissionName">{Mission.mission_name}</h2>
                <p className="MissionDescription">{Mission.description}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Missions available</p>
      )}
    </div>
  );
};

export default MissionsContainer;
