import React, { useEffect, useRef, useState } from 'react';

export default function UseRefHook() {
  const nameRef = useRef(null);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(nameRef.current.value);
  };

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          ref={nameRef}
        />
        <input type="submit" />
      </form>

      <br />

      Name: {name}
    </div>
  );
}
