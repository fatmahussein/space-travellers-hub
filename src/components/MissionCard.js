import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { handleMission } from '../Redux/MissionSlice';

const MissionCard = ({ props }) => {
  const {
    name, description, reserved, id,
  } = props;
  const dispatch = useDispatch();

  const getButton = (reserved, btn) => {
    let button;
    if (btn === 'member') {
      button = reserved ? (
        <span className="statusAfter">active member</span>
      ) : (
        <span className="statusBefore">Not a member</span>
      );
    }
    if (btn === 'mission') {
      button = reserved ? (
        <button className="leaveBtn" type="button" onClick={() => dispatch(handleMission(id))}>Leave Mission</button>
      ) : (
        <button className="joinBtn" type="button" onClick={() => dispatch(handleMission(id))}>Join Mission</button>
      );
    }
    return button;
  };

  return (
    <>
      <td className="mission-name">{name}</td>
      <td className="mission-description">{description}</td>
      <td className="table-badges">{getButton(reserved, 'member')}</td>
      <td className="table-btns">{getButton(reserved, 'mission')}</td>
    </>
  );
};

MissionCard.propTypes = {
  props: PropTypes.shape({
  }).isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};
export default MissionCard;
