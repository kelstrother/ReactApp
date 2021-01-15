import React from 'react'
import img from '../img/RMtitle.png'
import Species from './Species'
import { Link } from 'react-router-dom'


function Nav() {
  
   return (
   <>
   <Link to='/'>
      <div className='nav'>
        <img src={img} width='500' />
      </div>
   </Link>
   <Link to='/Species'>
      <div className='universe'>Rick and Morty Universe</div>
   </Link>
   </>
        
      
   )
}

export default Nav
