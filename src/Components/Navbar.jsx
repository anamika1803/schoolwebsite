import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
  <nav className=' flex flex-row justify-between bg-red-600 p-5'>
    <div className=' flex-row flex items-center'>
        <img  className='h-10 w-10 rounded-s-full' src='../src/assets/logo.png' alt=''/>
        <p className='ms-5'>School Website</p>
    </div>
    <div className='flex flex-row items-center'>
      <Link to={"/"}>
      <p>Home</p>
      </Link>
      <Link to={"/about"}>
      <p className=' ms-9'>About</p>
      </Link>
      <Link to={"/contact"}>
      <p className=' ms-9'>Contact</p>
      </Link>
      <Link to={"/blogs"}>
        <p className='  ms-9'>Blogs</p></Link>         
            
           
           
    </div>
  </nav>
  )
}
