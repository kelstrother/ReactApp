import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Character from './Pages/Character'
import Form from './Components/Form'
import CharacterCard from './Components/CharacterCard'
import Nav from './Pages/Nav'
import About from './Pages/About'
import './App.css';
import axios from 'axios'
// import logo from './img/RMtitle.png'


function App() {
  const [character, setCharacter] = useState([])  

        const getCharacter = async () => {
          const response = await fetch(`https://rickandmortyapi.com/api/character`)
          const data= await response.json()
          setCharacter(data.results)
            console.log(data)
      }
        useEffect(()=> {
        getCharacter()
      }, [])
  
  return (
    <div className="App">
      <Nav />
      {/* <Route path='/'>
        <Character />
      </Route> */}
      <Form />
      <Route path='/Character'>
        <Character character={character}/>
      </Route>
      <Route path='/About'>
        <About />
      </Route>
      
      {/* <SpeciesCard /> */}
    </div>
  );
}

export default App;
