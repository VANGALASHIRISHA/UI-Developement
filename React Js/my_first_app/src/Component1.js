import React from 'react'
import { useData } from './NameContext'
import Component2 from './Component2'

export default function Component1() {
  const { name } = useData()

  return (
    <div>
        <h3>From Component1</h3>
        <Component2></Component2>
      <h2>{name.First_Name}</h2>
    </div>
  )
}
