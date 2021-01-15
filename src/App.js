import React from 'react'
import './App.css';
import Species from './Pages/Species'
import Form from './Components/Form'
import CoverPage from './Pages/CoverPage'
import SpeciesCard from './Components/SpeciesCard'
import Nav from './Pages/Nav'
import { Route, Switch } from 'react-router-dom'
import About from './Pages/About'
// import logo from './img/RMtitle.png'

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path='/'>
        <CoverPage />
      </Route>
      <Route path='/Species'>
        <Species />
      </Route>
      {/* <Form /> */}
      {/* <SpeciesCard /> */}
    </div>
  );
}

export default App;
