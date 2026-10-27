import React, { useState } from 'react'

export default function UseStateHook() {
    const[number,updateNumber]=useState(0);
    const increment=()=>{
      updateNumber(number+1)
    }
     const decreament=()=>{
      updateNumber(number-1)
    }
    const reset=()=>{
      updateNumber(0)
    }
  return (
    <div>
      Number is :{number}<br></br>
      <button onClick={increment}>Increment</button><br></br>
      <button onClick={decreament}>decreament</button><br></br>
      <button onClick={reset}>reset</button><br></br>
    </div>
  )
}
