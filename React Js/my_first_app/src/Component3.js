import React from 'react'
import Component2 from './Component2'
import { useData } from './NameContext'

export default function Component3() {
    const  {name}=useData()
  return (
    <div>
      <h3>From Component3</h3>
      Name is:{name}
    </div>
  )
}
