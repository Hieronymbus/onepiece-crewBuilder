import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <header className='h-1/6 bg-gradient-to-br from-yellow-300 to-yellow-200 pl-10 pr-10 flex justify-between items-center rounded-br-m rounded-bl-lg '>
      <div>
        <Link to={'/home'}>
          <h1 className='text-7xl text-rose-900'>🗺️ pirateBayApp 🏴‍☠️</h1>
        </Link>
      </div>
      <nav className='w-1/5  h-full '>
        <ul className='h-full w-full flex flex-col justify-around'>
          <li className='h-2/5 w-full'>
            <Link to={"/pirates"}>
              <button 
                className='h-full w-full text-4xl bg-gradient-to-tr from-yellow-600 to-yellow-400 rounded-lg' 

              >
                PIRATES
              </button>
            </Link>
          </li>
          <li className='h-2/5 w-full'>
            <Link to={"/crews"}>
              <button 
                className='h-full w-full text-4xl bg-gradient-to-tr from-yellow-600 to-yellow-400  rounded-lg' 

              >
                CREWS
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar