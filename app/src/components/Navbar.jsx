import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
        <h1 className='w-full text-4xl font-bold'><Link to="/">Virtual Garden</Link></h1>
        <ul className='flex' >
            <li className='p-4 transition-all duration-1000 text-black hover:text-green-600'>
              <Link to="/About">About</Link>
            </li> {/* Link to About */}
            <li className='p-4 transition-all duration-1000 text-black hover:text-green-600'>
              <Link to="/FAQ">FAQ</Link> {/* Link to FAQ */}
            </li>
            <li className='p-4 transition-all duration-1000 text-black hover:text-green-600'>
              <Link to="/Contact">Contact</Link> {/* Link to FAQ */}
            </li>
        </ul>
        <Link to="/Upload"><button className='bg-green-600 text-white w-[175px] rounded-md font-medium my-6 mx-auto px-6 py-3 cursor-pointer hover:bg-green-700 transition duration-300'>Analyze Plant</button></Link>
    </div>
  )
}

export default Navbar