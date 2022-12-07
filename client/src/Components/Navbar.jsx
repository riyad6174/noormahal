import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo/logo.png"
const Navbar = () => {
  return (
    <div className='bg-primary'>
        <ul className='container flex items-center justify-between  font-primaryFont text-sm '>
            <li>
                Overview
            </li>
            <li className='hover:text-secondary cursor-pointer transition'>Stay</li>
            <li className='hover:text-secondary cursor-pointer transition'>Dinning</li>
            <li className='hover:text-secondary cursor-pointer transition'>Facilities</li>
            <Link to="/wedding" className='hover:text-secondary cursor-pointer transition'>Wedding & Events</Link>
            <Link to="/" className='w-28 h-24 mt-4 ' ><img src={logo} alt="logo" /></Link>
            <li className='hover:text-secondary cursor-pointer transition'>Meeting & Conference</li>
            <li className='hover:text-secondary cursor-pointer transition'>Promotions</li>
            <li className='hover:text-secondary cursor-pointer transition'>Hazuri bagh</li>
        </ul>
    </div>
  )
}

export default Navbar