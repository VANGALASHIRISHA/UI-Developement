import React, { useEffect, useState } from 'react';

export default function UseEffectHook() {
  const [name, setName] = useState("Venu");
  const [count, setCount] = useState(0);
  useEffect(() => {
    setName("Venu Gopal");
  }, []);
  const increment = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log("Count", count);
  }, [count]);
  return (
    <div>
      <h2>Name is: {name}</h2>
      <button onClick={increment}>Add Event</button>
      <p>Count: {count}</p>
    </div>
  );
}
