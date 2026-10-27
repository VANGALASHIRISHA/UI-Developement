/*import React, { useReducer } from 'react'

function test(state,value){
    console.log(state,value)
    return state+value;
}

export default function UserReducerHook() {
   const[state,dispatch]  =useReducer(test,0)
  return (
    <div>
      State is:{state}<br></br>
      <button onClick={()=>{dispatch(1)}}>Increment</button><br></br>
       <button onClick={()=>{dispatch(-1)}}>Decrement</button><br></br>
    </div>
  )
} */

  import React, { useReducer } from 'react'
  function test(state,obj){
    if(obj.value==='INC')
    {
      return obj.payload+state
    }
else if(obj.value==='DEC')
{return state-obj.payload


}
else{
  return 0
}
  }
  
  export default function UserReducerHook() {
    const[state,dispatch]=useReducer(test,0)

    return (
      <div>
        State is:{state}<br></br>
        <button onClick={()=>{dispatch({value:'INC',payload:1})}}>Increment</button><br></br>
       <button onClick={()=>{dispatch({value:'DEC',payload:1})}}>Decrement</button><br></br>
        <button onClick={()=>{dispatch({value:'RES'})}}>Reset</button><br></br>
      </div>
    )
  }
  
