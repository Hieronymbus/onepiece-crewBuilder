import React from 'react'

const PirateCard = (props) => {

    const { name, epithet, age, combatStyle, role, bounty, image } = props
    

    return (
        <div className='w-1/5 p-2 border rounded-md border-black flex flex-col justify-between '>
            <div>
                <img 
                    className='w-24 h-auto'
                    src={`http://localhost:5000/${image}`} 
                />
                <h1
                    className=''
                >
                    {name} 
                </h1>
                <h2>
                    {epithet}
                </h2>
                <h2>
                    {age}
                </h2>
                <h2>
                    {combatStyle}
                </h2>
                <h2>
                    {role}
                </h2>
                <h2>
                    {bounty}
                </h2>
            </div>
            <div className='flex gap-2'>
                <button
                    className=' text-4xl p-1 flex justify-center items-center text-amber-950 bg-wood-brown dark:bg-wood-brown-dark rounded-lg shadow-lg'
                >
                    Edit 
                </button>
                <button
                    className=' text-4xl p-1 flex justify-center items-center text-amber-950 bg-wood-brown dark:bg-wood-brown-dark rounded-lg shadow-lg'
                >
                    Delete 
                </button>
            </div>
        </div>
    )
}

export default PirateCard