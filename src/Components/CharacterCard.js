import React from 'react'

function CharacterCard({ character }) {
   return (
      <div className="card">
       <div className="card-inner">
          <div className="cc-front">
             <img src={character.image} alt=''/>
          </div>
          <div className="cc-back">
             <h1>{character.name}</h1>
             <ul>
                <li>
                   <strong>Character:</strong> {character.name}
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
