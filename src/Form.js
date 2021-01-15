import React from 'react'
import Species from './Species'

// ~             FORM WILL BE WHAT YOU SEARCH FOR THE MOVIES WITH

const Form = (props) => {

   // ! CREATE STATE TO HOLD THE FORMS DATA
   const [speciesData, setSpeciesData] = React.useState(null)

   // !CREATE FUNCTION TO UPDATE FORM DATA ONCHANGE (SO THAT YOU CAN TYPE IN THE TEXT FIELD)
   const handleChange = (event) => {
      // console.log("event:", event)
      setSpeciesData( {...speciesData, [event.target.name]: event.target.value} )
   }

   // !   CREATE A FUNCTION TO SUBMIT THE FORM
   const handleSubmit = (event) => {
      event.preventDefault()
      props.speciesSearch(speciesData.searchterm)
   }
   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input 
            type='text'
            name=''
            value='Search for a Being'
            onChange={handleChange}         
            />
            <input 
            type='submit' 
            value='Get Info'/>
         </form>
      </div>
   
   )
}
export default Form