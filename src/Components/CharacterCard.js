import React from 'react'
import { Link } from 'react-router-dom'

function CharacterCard({ character }) {
   return (
      <div className="card">
       <div className="card-inner">
          <div className="cc-front">
             <div className="cc-image">
                <img src={character.image} alt=''/> 
                  <div className="name-banner">
                     <h2 className='front-name'>{character.name}</h2>
                  </div>
             </div>
          </div>
          <div className="cc-back">
             <ul>
                <li className='back-name'>
                   <strong>{character.name}</strong> 
                </li>
                <li>
                   <strong>Species:</strong> {character.species}
                </li>
                <li>
                   <strong>Status:</strong> {character.status}
                </li>
                <li>
                   <strong>Location:</strong> {character.origin.name}
                </li> 
             </ul>
          </div>
       </div>
      
    </div>
   )
}

export default CharacterCard
