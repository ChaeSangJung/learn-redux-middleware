import React from 'react';
import CounterContainer from './components/CounterContainer';
import ThunkCounterContainer from './components/ThunkCounterContainer';

function App() {
  return (
    <div>
      <CounterContainer />
      <ThunkCounterContainer />
    </div>
  );
}

export default App;