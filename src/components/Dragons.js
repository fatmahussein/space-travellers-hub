import React, { useEffect } from 'react';
import DragonCard from './DragonCard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDragons } from '../Redux/Dragons/DragonSlice';

function Dragons() {
    const { dragons, isLoading, isError, } = useSelector((store) => store.dragons);
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(fetchDragons());
    }, [dispatch]);
    
    if (isLoading) {
      return <p className="info">Loading....Please wait</p>;
    }
    if (isError) {
      return <p className="info">Sorry, please try again</p>;
    }
    if (dragons.length === 0) return <p className="info">Sorry, no dragons available at the moment</p>;
    return (
      <DragonCard dragons={dragons} />
    );
}

export default Dragons;
