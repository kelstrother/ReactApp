import React from 'react'
import img from '../img/RMtitle.png'
import Species from './Species'
import { Link } from 'react-router-dom'


function Nav() {
  
   return (
         <div className='nav'>
            <Link to='/Species'>
            <div className='universe'>Rick and Morty Universe</div>
            </Link>
            <Link to='/'>
            <div className='logo'>
               <img src={img} width='250' />
            </div>
            </Link>
            <Link to='/About'>
            <div className='about'>About</div>
            </Link>
         </div>
        
      
   )
}

export default Nav
