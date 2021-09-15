import React from 'react';
import CounterContainer from './components/CounterContainer';
import ThunkCounterContainer from './components/ThunkCounterContainer';
import PostListContainer from "./components/PostListContainer";

function App() {
  return (
    <div>
      <CounterContainer />
      <ThunkCounterContainer />
      <PostListContainer />
    </div>
  );
}

export default App;