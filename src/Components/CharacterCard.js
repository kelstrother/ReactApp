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
                   <strong><span className='cb-name'>{character.name}</span></strong> 
                </li>
                <li>
                   <strong><span className="cb-human">Species:</span></strong> {character.species}
                </li>
                <li>
                   <strong><span className="cb-status">Status:</span></strong> {character.status}
                </li>
                <li>
                   <strong><span className="cb-location">Location:</span></strong> <span  className='back-location'>{character.origin.name}</span>
                </li> 
             </ul>
          </div>
       </div>
      
    </div>
   )
}

export default CharacterCard
