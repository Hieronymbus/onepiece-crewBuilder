import React, {useState} from 'react'
import PirateFormModal from '../components/PirateFormModal'

const PiratesPage = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  return (
    <div className='h-5/6 flex flex-col  items-center'>
      <h1 className='text-5xl'>Known Pirates</h1>
      <div className='w-11/12 h-5/6 border-2 border-orange-900 p-4'>
        
      </div>
      {isModalOpen && <PirateFormModal />}
    
    
    </div>

  )
}

export default PiratesPage