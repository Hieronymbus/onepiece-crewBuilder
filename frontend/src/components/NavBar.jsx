import React from 'react'

import { Link } from 'react-router-dom'
import { FaShip } from 'react-icons/fa';

import { GiPirateSkull } from 'react-icons/gi';      // Game Icons icon
import { MdHome } from 'react-icons/md';   
import { GiMoon } from 'react-icons/gi'
import { GiSun } from 'react-icons/gi'


const NavBar = ({ isDarkModeOn, setIsDarkModeOn }) => {


  const handleThemeToggle = () => {

    if(isDarkModeOn){
      setIsDarkModeOn(false)
    } else {
      setIsDarkModeOn(true)
    }
    
  }

  return (
    <header className='h-1/6 bg-wood-navbar pl-10 pr-10 flex justify-between items-center rounded-br-m rounded-bl-lg '>
      <div>
        <Link to={'/home'}>
          <h1 className='text-7xl text-amber-950'> take2Piece 🏴‍☠️</h1>
        </Link>
      </div>
      <nav className='w-1/4  h-full flex justify-between '>
        
        <ul className='h-full w-4/6 flex flex-col justify-around'>
          <li className='h-2/5 w-full'>
            <Link to={"/pirates"}>
              <button 
                className='h-full w-full text-4xl flex justify-center items-center text-amber-950 bg-wood-brown dark:bg-wood-brown-dark rounded-lg shadow-lg' 

              >
                PIRATES 
                <GiPirateSkull size={40} color="black" />
              </button>
            </Link>
          </li>
          <li className='h-2/5 w-full'>
            <Link to={"/crews"}>
              <button 
                className='h-full w-full text-4xl flex justify-center items-center text-amber-950 bg-wood-brown dark:bg-wood-brown-dark rounded-lg shadow-lg' 

              >
                CREWS
                <FaShip size={40} color="black" />
              </button>
            </Link>
          </li>
        </ul>
        <ul className='h-full w-3/12  flex flex-col justify-around '>
          <li className='h-2/5 w-full'>
            <Link to={"/home"}>
              <button className='h-full w-full text-4xl flex justify-center items-center text-amber-950 bg-wood-brown dark:bg-wood-brown-dark rounded-lg shadow-lg'>
                <MdHome size={45} color="black" />
              </button>
            </Link> 
          </li>
          <li className='h-2/5 w-full'>
            <button 
              className='h-full w-full  text-4xl flex justify-center items-center text-amber-950 bg-wood-brown dark:bg-wood-brown-dark rounded-lg shadow-lg'
              onClick={handleThemeToggle}
            >
              { isDarkModeOn ? <GiSun size={40} color="black" /> : <GiMoon size={40} color='black' />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar