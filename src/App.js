import React from 'react';
import './App.css';
import ExerciseCode from './exercise-code';
import ExerciseDescription from './exercise-description';

function App() {
  return (
    <div className="App">
      <ExerciseDescription />
      <br />
      <ExerciseCode />
    </div>
  );
}

export default App;
