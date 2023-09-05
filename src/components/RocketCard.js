import React from 'react';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// import { reserveRocket, cancelRocket } from '../Redux/RocketSlice';
import '../css/rocket.css';

function RocketCard({ rockets }) {
  // const dispatch = useDispatch();
  return (
    <div>
      {rockets.map((rocket) => (
        <div className="card" key={rocket.id}>
          <div className="imgcontent">
            <img src={rocket.image} alt="picha" />
          </div>
          <div className="description">
            <h2>{rocket.name}</h2>
            <p>{rocket.description}</p>
            <button type="button">Reserve Rocket</button>
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
    }),
  ).isRequired,
};
export default RocketCard;
