import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DragonCard from './DragonCard';
import { fetchDragons } from '../Redux/DragonSlice';

function Dragons() {
  const { dragons, isLoading, isError } = useSelector((store) => store.dragons);
  const dispatch = useDispatch();

  useEffect(() => {
    if (dragons.length < 1) {
      dispatch(fetchDragons());
    }
  }, [dispatch, dragons.length]);

  if (isLoading) {
    return <p className="info">Loading....Please wait</p>;
  }
  if (isError) {
    return <p className="info">Sorry, please try again</p>;
  }
  if (dragons.length === 0) return <p className="info">Sorry, no dragons available at the moment</p>;
  return (
    <div data-testid="dragon">
      <DragonCard dragons={dragons} />
    </div>
  );
}

export default Dragons;
