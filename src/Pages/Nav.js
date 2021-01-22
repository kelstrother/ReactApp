import { Link } from 'react-router-dom'


function Nav() {
  
   return (
            <div className="nav-container">
               <Link to='/'>
               <p className='universe'>Characterverse</p>
               </Link>
               <Link to='/About'>
               <p className='about'>About</p>
               </Link>
            </div>    
   )
}

export default Nav
