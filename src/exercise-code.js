const ExerciseCode = () => {
  const stringCompression = s => {
    let sCompressed = '';
    let counter = 0;

    for (let i=0; i<s.length; i++) {
      counter++;
      if (s[i] !== s[i+1]) {
        sCompressed += s[i] + counter;
        counter = 0;
      }
    }

    return sCompressed;
  };

  [
    'aaa',
    'aabbbcdd',
    ''
  ].map(
    s => console.log(`${s} --> ${stringCompression(s)}`)
  );

  return null;
};

export default ExerciseCode;
