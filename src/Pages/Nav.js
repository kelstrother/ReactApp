import React from 'react'
import img from '../img/RMtitle.png'
import Characters from './Characters'
import { Link } from 'react-router-dom'


function Nav() {
  
   return (
         <div className='nav'>
            <Link to='/'>
            <p className='universe'>Characterverse</p>
            </Link>
            <Link to='/'>
             <img className='logo' src={img} width='250' />
            </Link>
            <Link to='/About'>
            <p className='about'>About</p>
            </Link>
         </div>
        
      
   )
}

export default Nav
