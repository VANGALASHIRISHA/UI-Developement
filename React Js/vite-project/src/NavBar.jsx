import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='navBar'>
      <ul className='navSection'>
        <Link to='page1'>
    <li>Fitst Page</li>
    </Link>
    <Link to='page2'>
        <li>Second Page</li></Link>

        <Link to='page3'>
            <li>Third Page</li></Link>
      </ul>
    </div>
  )
}
