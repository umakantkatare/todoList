/* eslint-disable no-unused-vars */
import React from 'react'

function Navbar() {
  return (
    <nav className=' flex bg-blue-700 justify-between p-2 px-5 text-white items-center'>
        <div className=' text-2xl font-bold'>
            logo
        </div>
      <ul className='flex gap-4 cursor-pointer text-xl '>
        <li className='hover:font-bold'>Home</li>
        <li className='hover:font-bold'>Your Tasks</li>
      </ul>

    </nav>
  )
}

export default Navbar