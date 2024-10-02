import React from 'react'

const PirateCard = (props) => {

    const { name, epithet, age, combatStyle, role, bounty, image } = props

    return (
        <div>
            {name}
            {epithet}
            {age}
            {combatStyle}
            {role}
            {bounty}
        </div>
    )
}

export default PirateCard