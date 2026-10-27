import React from 'react'

export default function ArrayDestructure(props) {
const [a1,a2]=props.array
  return (
    <div>
      <h4>ArrayDestructure</h4>
      {a1 [0]}:{a1[1]}<br></br>
      {a2[0]}:{a2[1]}
    </div>
  )
}
