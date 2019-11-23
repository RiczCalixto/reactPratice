import * as React from 'react'
import './card.style.css' 

export const CardList = (props) => {
    console.log(props.children)
    return (
        <div className='card-list'>
            {
            props.monsters && props.monsters.map(monster => 
                <h1 key={monster.id}>{monster.name}</h1>)
            }
        </div>)
}