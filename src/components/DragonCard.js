import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveDragon, cancelDragon } from '../Redux/DragonSlice';
import '../styles/css/dragon.css';

function DragonCard({ dragons }) {
  const dispatch = useDispatch();
  const handleReserveClick = (dragonId) => {
    dispatch(reserveDragon(dragonId));
  };
  const handleCancelClick = (dragonId) => {
    dispatch(cancelDragon(dragonId));
  };
  return (
    <div>
      {dragons.map((dragon) => (
        <div className="card" key={dragon.id}>
          <div className="imgcontent">
            <img src={dragon.image} alt="dragon" />
          </div>
          <div className="type">
            <h2>{dragon.name}</h2>
            <div className="paragraph">
              <p className="p">
                {dragon.reserved && <span className="reservedBadge">Reserved</span>}
                {dragon.type}
              </p>
            </div>
            {dragon.reserved ? (
              <button type="button" id="cancelReservation" onClick={() => handleCancelClick(dragon.id)}>
                Cancel Reservation
              </button>
            ) : (
              <button type="button" onClick={() => handleReserveClick(dragon.id)}>
                Reserve Dragon
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

DragonCard.propTypes = {
  dragons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      reserved: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default DragonCard;
