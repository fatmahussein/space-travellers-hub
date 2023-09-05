import React from 'react';
import { useDispatch } from 'react-redux';
import { cancelRocket, reserveRocket } from '../Redux/RocketSlice';

function Button({ reserved }) {
  const dispatch = useDispatch();

  const handleClick = () => {

  };
  return (
    <>
      {rocket.reserved ? (
        <button type="button" id="cancelReservation" onClick={() => dispatch(cancelRocket(rocket.id))}>Cancel Reservation</button>

      ) : (

        <button type="button" onClick={() => dispatch(reserveRocket(rocket.id))}>Reserve Rocket</button>
      )}
    </>
  );
}

{ /* <button type="button" onClick={() =>
               dispatch(reserveRocket(rocket.id))}>Reserve Rocket</button> */ }
{ /* <button type="button" id="cancelReservation"
             onClick={() => dispatch(cancelRocket(rocket.id))}>Cancel Reservation</button> */ }
export default Button;
