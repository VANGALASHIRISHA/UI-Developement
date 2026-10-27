import React, { useState, useCallback } from 'react';

const s = new Set();

export default function UseCallBackHook() {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);

  const incrementN1 = useCallback(() => {
    setN1(prev => prev + 1);
  }, []);

  const incrementN2 = useCallback(() => {
    setN2(prev => prev + 1);
  }, []);

  s.add(incrementN1);
  s.add(incrementN2);

  console.log('Set size:', s.size);

  return (
    <div>
      n1: {n1} <br />
      n2: {n2} <br /><br />

      <button onClick={incrementN1}>Increment n1</button>
      <button onClick={incrementN2}>Increment n2</button>
    </div>
  );
}
