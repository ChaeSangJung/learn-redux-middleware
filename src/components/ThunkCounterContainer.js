import React from 'react';
import ThunkCounter from '../components/ThunkCounter';
import { useSelector, useDispatch } from 'react-redux';
import { thunkIncreaseAsync, thunkDecreaseAsync } from '../modules/thunkcounter';

function ThunkCounterContainer() {
  const { thunkcounter } = useSelector(state => state);
  const dispatch = useDispatch();

  const onIncrease = () => {
      dispatch(thunkIncreaseAsync());
  };
  const onDecrease = () => {
      dispatch(thunkDecreaseAsync());
  };

  return (
      <ThunkCounter 
        number = {thunkcounter}
        onIncrease={onIncrease} 
        onDecrease={onDecrease} 
      />
  );
}

export default ThunkCounterContainer;