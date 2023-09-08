import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import '../styles/css/rocket.css';
import { reserveRocket, cancelRocket } from '../Redux/RocketSlice';

function RocketCard({ rockets }) {
  const dispatch = useDispatch();
  const handleReserveClick = (rocketId) => {
    dispatch(reserveRocket(rocketId));
  };
  const handleCancelClick = (rocketId) => {
    dispatch(cancelRocket(rocketId));
  };
  return (
    <div>
      {rockets.map((rocket) => (
        <div className="card" key={rocket.id}>
          <div className="imgcontent">
            <img src={rocket.image} alt="picha" />
          </div>
          <div className="description">
            <h2>{rocket.name}</h2>
            <div className="paragraph">

              <p className="p">
                {rocket.reserved && <span className="reservedBadge">Reserved</span>}
                {rocket.description}
              </p>
            </div>
            {rocket.reserved ? (
              <button type="button" id="cancelReservation" onClick={() => handleCancelClick(rocket.id)}>Cancel Reservation</button>
            ) : (
              <button type="button" onClick={() => handleReserveClick(rocket.id)}>Reserve Rocket</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
RocketCard.propTypes = {
  rockets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      reserved: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};
export default RocketCard;
