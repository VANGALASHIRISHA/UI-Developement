import React from 'react';

export default function ObjectDestructure({ props }) {
  // e is already a single employee object
  const { id, name, designation } =props;

  return (
    <div>
      <h4>ObjectDestructure</h4>
      <p>{id}</p>
      <p>{name}</p>
      <p>{designation}</p>
    </div>
  );
}
