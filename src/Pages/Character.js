import React, { useState, useEffect } from 'react'
import CharacterCard from '../Components/CharacterCard'

function Character({ character }) {
   
   return (
      <div className="cards">
         {character.map(character => (
            <CharacterCard key={character.id} character={character}/>
         ))}
      </div>
   )
}

export default Character
   