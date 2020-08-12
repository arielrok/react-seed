const ExerciseCode = () => {
  const inputs = [ [0], [0, 1], [4, 3, 2, 1], [9, 7, 8, 7] ];
  const expectedOutputs = [0, 1, 2, 8];

  const bubbleSort = arr => {
    let swapped = false;
    let counter = 1;

    do {
      swapped = false;
      counter++;
      for (let i=0; i<arr.length - 1; i++) {
        if (arr[i] > arr[i+1]) {
          [arr[i+1], arr[i]] = [arr[i], arr[i+1]];
          swapped = true;        
        }
      }
    } while(swapped)

    console.log(`bubbleSort: [${arr}] was itereated ${counter} time(s)`);

    return arr;
  };

  const secondSmallest = input => {
    if (input.length < 2) return 0;

    const inputSorted = bubbleSort(input);

    let secondSmallestVal = inputSorted[0];
    for (let i=1; i<inputSorted.length; i++) {
      if (inputSorted[i] > secondSmallestVal) {
        secondSmallestVal = inputSorted[i];
        break;
      }
    }

    return secondSmallestVal;
  };

  inputs.forEach((el, i) => {
    console.log(`input: [${inputs[i]}], output: ${secondSmallest(el)}, expected: ${expectedOutputs[i]}`);
  });

  return null;
};

export default ExerciseCode;
