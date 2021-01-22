import React from 'react'
import { Link } from 'react-router-dom'
import img from '../img/RMtitle.png'

const Header = () => {
   return (
      <div className='header'>
         <Link to='/'>
         <img className='logo' src={img} width='250' />
         </Link>
      </div>
   )
}

export default Header
