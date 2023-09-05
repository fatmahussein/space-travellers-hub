import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RocketCard from './RocketCard';
import { fetchRockets } from '../Redux/RocketSlice';

function Rocket() {
  const {
    rockets, isLoading, isError,
  } = useSelector((store) => store.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  if (isLoading) {
    return <p className="info">Loading....Please wait</p>;
  }
  if (isError) {
    return <p className="info">Sorry, please try again</p>;
  }
  if (rockets.length === 0) return <p className="info">Sorry, no rockets available at the moment</p>;
  return (
    <RocketCard rockets={rockets} />
  );
}
export default Rocket;
