import React from 'react'


const Form = (props) => {

   // ! CREATE STATE TO HOLD THE FORMS DATA
   const [characterData, setCharacterData] = React.useState(null)

   // !CREATE FUNCTION TO UPDATE FORM DATA ONCHANGE (SO THAT YOU CAN TYPE IN THE TEXT FIELD)
   const handleChange = (event) => {
      // console.log("event:", event)
      setCharacterData( {...characterData, [event.target.name]: event.target.value} )
   }

   // !   CREATE A FUNCTION TO SUBMIT THE FORM
   const handleSubmit = (event) => {
      event.preventDefault()
      props.characterSearch(characterData.searchterm)
   }
   return (
      <div className='form'>
         {/* <form onSubmit={handleSubmit}>
            <input className='searchbar'
            type='text'
            name='charactersearch'
            value={characterData.searchTerm}
            placeholder='Search the Universe'
            onChange={handleChange}         
            />
            <input className='btn'
            type='Submit' 
            value='Go'/>
         </form> */}
      </div>
   
   )
}
export default Form