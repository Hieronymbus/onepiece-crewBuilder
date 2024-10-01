import React from 'react'

const NavBar = () => {
  return (
    <header className='h-1/6 bg-slate-500 flex justify-around items-center'>
      <div>
        <h1 className='text-7xl'>PIRATE CREW MAKER</h1>
      </div>
      <nav className='w-1/5  h-full bg-white '>
        <ul className='h-full w-full divide-y-4 '>
          <li className='h-1/2 w-full'>
            <button className='h-full w-full text-4xl' >
              Pirates
            </button>
          </li>
          <li className='h-1/2 w-full'>
            <button className='h-full w-full text-4xl'>
             Crews
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar