import React from 'react'

export default function SpreadOperator() {
    const a1=[10,20,30]
    const a2=[40,50,60] 
    const new_array=[...a1,...a2]
  return (
    <div>
        <h2>SpreadOperator on Array</h2>
        {`a1 ${a1}`}<br></br>
        {`a2 ${a2}`}<br></br>
      {`new_array ${new_array}`}<br></br>
      <h4>Iterating array Using Map functions</h4>
      {new_array.map((n)=><p>{n}</p>)}
      <TestObject></TestObject>
      
    </div>
  )
}

function TestObject(){
    const emp={
        id:101,
        name:"Venu",
        Designation:"Trainer"
    }
    const address={
        hno:"2-4/A",
        City:"Hyderabad",
        State:"Telangana"
    }
    const employee_details={...emp,...address}
    return(
<div>
    <h2>SpreadOperator On Object</h2>
Employee:
{employee_details.id}<br></br>
{employee_details.name}<br></br>
{employee_details.Designation}<br></br>
{employee_details.hno}<br></br>
{employee_details.City}<br></br>
{employee_details.State}<br></br>
{
  Object.values(employee_details).map((value, index) => (
    <div key={index}>{value}</div>
  ))
}

    </div>)
}
