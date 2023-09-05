import React from 'react';
import PropTypes from 'prop-types';
import '../css/rocket.css';
import Button from './Button';

function RocketCard({ rockets }) {
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
            <Button />
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
