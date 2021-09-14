import React from 'react';
import ThunkCounter from '../components/ThunkCounter';
import { useSelector, useDispatch } from 'react-redux';
import { thunkIncreaseAsync, thunkDecreaseAsync } from '../modules/thunkcounter';

function ThunkCounterContainer() {
  const number = useSelector(state => state.thunkcounter);
  const dispatch = useDispatch();

  const onIncrease = () => {
      dispatch(thunkIncreaseAsync());
  };
  const onDecrease = () => {
      dispatch(thunkDecreaseAsync());
  };

  return (
      <ThunkCounter 
        number = {number}
        onIncrease={onIncrease} 
        onDecrease={onDecrease} 
      />
  );
}

export default ThunkCounterContainer;