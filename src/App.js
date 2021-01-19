import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Character from './Pages/Character'
import Form from './Components/Form'
// import Home from './Pages/Home'
import CharacterCard from './Components/CharacterCard'
import Nav from './Pages/Nav'
import About from './Pages/About'
import './App.css';
import axios from 'axios'
// import logo from './img/RMtitle.png'


function App() {
  const [character, setCharacter] = useState([])  
  const [endPoint, setEndPoint] = useState('')

        const getCharacter = async () => {
          const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${endPoint}`)
          const data= await response.json()
          setCharacter(data.results)
            console.log(data)
      }
        useEffect(()=> {
        getCharacter()
      }, [endPoint])
  
  return (
    <div className="App">
      <Nav />
      <Form getEndPoint={(endPoint) => setEndPoint(endPoint)} />
      <Switch>
      {/* <Route path='/'>
        <Home />
      </Route>   */}
      <Route path='/Character'>
        <Character character={character}/>
      </Route>
      <Route path='/About'>
        <About />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
