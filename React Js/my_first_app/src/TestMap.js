import React from 'react'

export default function Map() {
    const a=[10,20,30]
    const result=a.map((n)=>{return n*2})
     const array_obj=[
      {
        id:101,
        name:"Venu",
        Designation:"Trainer"
    },
    {
        hno:"2-4/A",
        City:"Hyderabad",
        State:"Telangana"
    }
  ]
  return (
    <div>
      {result}<br></br>
      {array_obj.map((obj)=>{return(<div>
        {obj.id}<br></br>
         {obj.name}<br></br>
          {obj.Designation}<br></br>
           {obj.hno}<br></br>
            {obj.City}<br></br>
             {obj.State}<br></br>
        </div>)})}
    </div>
  )
}
