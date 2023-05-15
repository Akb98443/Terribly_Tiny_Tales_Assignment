import React from 'react'
import {Link} from "react-router-dom"
export default function Button() {
  return (
    <div className='btn-container'>
      <Link className='btn' to="/histogram"> Click Me</Link>
    </div>
  )
}
