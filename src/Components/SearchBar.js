import { useState, useEffect } from 'react'


const SearchBar = ({ getEndPoint, endPoint, setEndPoint}) => {
   const [text, setText] = useState('')

   const onChange = (endPoint) => {
      setText(endPoint)
      getEndPoint(endPoint)
   }
  
   return (
      <div className='form'>
         <form>
            <input 
            className='searchbar'
            type='text'
            name='charactersearch'
            value={ text }
            placeholder='Search Characters...'
            onChange={(e) => onChange(e.target.value)}         
            />
         </form>
      </div>
   )
}

export default SearchBar