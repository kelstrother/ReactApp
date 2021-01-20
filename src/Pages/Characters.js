import React, { useState, useEffect } from 'react'
import CharacterCard from '../Components/CharacterCard'

function Characters({ character }) {
   
   return (
      <div className="cards">
         {character.map(character => (
            <CharacterCard key={character.id} character={character}/>
         ))}
      </div>
   )
}

export default Characters
   