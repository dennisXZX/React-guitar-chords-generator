import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Guitar Chords Generator</h1>

      <button className='generate-button'>Generate Random Chords</button>

      <div className='time-interval-container'>
        <span>Time Interval: </span>
        <input
          className='time-interval'
          value={30}
        />
      </div>

      <div className='chord-display'>
        <span>A</span>
        <span>E</span>
        <span>D</span>
      </div>
    </div>
  );
}

export default App;
