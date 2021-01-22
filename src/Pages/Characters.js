import React, { useState, useEffect } from 'react'
import CharacterCard from '../Components/CharacterCard'
import SearchBar from '../Components/SearchBar'

function Characters({ character }) {
// const [character, setCharacter] = useState([])  
  


   return (
      <div className="cards">
         {character.map(character => (
            <CharacterCard key={character.id} character={character}/>
         ))}   
      </div>
      
   )

}
export default Characters
   