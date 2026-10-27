import React, { useState, useMemo } from 'react';

export default function UseMemoHook() {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(3);

  const factorial = useMemo(() => {
    return fact(n2);
  }, [n2]);

  return (
    <div>
      <h3>useMemo Example</h3>

      n1 is: {n1} <br />
      n2 is: {n2} <br />
      Factorial of {n2} is {factorial} <br /><br />

      <button onClick={() => setN1(n1 + 1)}>Increment n1</button>
      <button onClick={() => setN2(n2 + 1)}>Increment n2</button>
    </div>
  );
}

function fact(n) {
  let f = 1;
  for (let i = 1; i <= n; i++) {
    f *= i;
  }
  return f;
}
