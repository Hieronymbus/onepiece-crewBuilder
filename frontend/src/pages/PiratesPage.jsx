import React, {useState, useEffect} from 'react'

import { usePirateStore } from '../store/pirate.js'

import PirateFormModal from '../components/PirateFormModal'
import PirateCard from '../components/PirateCard.jsx'

const PiratesPage = () => {
  
  const { pirates, readPirates} = usePirateStore()

  const [isModalOpen, setIsModalOpen] = useState(false)
  
  useEffect(() => {
     
    readPirates()

  },[readPirates])

  const handleOpenModal = ( ) => {
      setIsModalOpen(true)
  }

  return (
    <div className='h-5/6 flex flex-col items-center'>
      <div className='m-3 w-full '>
        <h1 className='text-5xl'>Known Pirates</h1>
        <div className='w-full flex justify-end'>
          <button 
            className='h-1/2 w-1/5 text-4xl flex justify-center items-center text-amber-950 bg-wood-brown dark:bg-wood-brown-dark rounded-lg shadow-lg'
            onClick={handleOpenModal}
          >
          Create New Pirate
          </button>
        </div>
        
      </div>
      <div className='w-11/12 h-5/6 border-2 border-orange-900 p-4'> 
        {
          pirates.map((pirate, index) => {
            return (
              <PirateCard
                key={index}
                name={pirate.name}
                epithet={pirate.epithet}
                age={pirate.age}
                combatStyle={pirate.combatStyle}
                role={pirate.role}
                bounty={pirate.bounty}
                image={pirate.image}
              />
            );
          })
        }
      </div>

      {isModalOpen && <PirateFormModal setIsModalOpen={setIsModalOpen} />}
    </div>

  )
}

export default PiratesPage