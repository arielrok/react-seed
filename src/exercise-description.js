import React from 'react';

const ExerciseDescription = () => {
  return (
    <div>
      <h2>Problem 1 - Bubble Sort</h2>
      <h3>Bubble sort runs in O(n²) time, fastest case is O(n) - linear - when input is already sorted</h3>
      <p>
        {'If the array has < 2 numbers then return 0, else return the second smallest number.'}
        <br /><strong>Note: </strong>
        In the above problem you cannot use the method <strong>sort()</strong> so please take a look at bubble sort or any other sort. 
      </p>
      <h3>Input</h3>
      <p>[ [0], [0, 1], [4, 3, 2, 1] ]</p>
      <h3>Expected Output</h3>
      <p>[0, 1, 2]</p>
      
      <h3>Solution References</h3>
      <div>
        <a href="https://medium.com/javascript-algorithms/javascript-algorithms-bubble-sort-3d27f285c3b2">
        https://medium.com/javascript-algorithms/javascript-algorithms-bubble-sort-3d27f285c3b2
        </a>
      </div>
      <br />
      <div>
        <a href="https://www.w3resource.com/javascript-exercises/javascript-function-exercise-24.php">
        https://www.w3resource.com/javascript-exercises/javascript-function-exercise-24.php
        </a>
      </div>
    </div>
  );
};

export default ExerciseDescription;
