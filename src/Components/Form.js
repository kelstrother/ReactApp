import { useState } from 'react'

const Form = ({ getEndPoint }) => {

   const [text, setText] = useState('')

   const onChange = (endPoint) => {
      setText(endPoint)
      getEndPoint(endPoint)
   }
   return (
      <div className='form'>
         <form 
         // onSubmit={handleSubmit}
         >
            <input 
            className='searchbar'
            type='text'
            name='charactersearch'
            value={ text }
            placeholder='Search Character...'
            onChange={(e) => onChange(e.target.value)}         
            />
            {/* <input className='btn'
            type='Submit' 
            value='Go'/> */}
         </form>
      </div>
   )
}

export default Form

   

// const Form = (props) {

   // const [characterData, setCharacterData] = React.useState(null)
   // !CREATE FUNCTION TO UPDATE FORM DATA ONCHANGE (SO THAT YOU CAN TYPE IN THE TEXT FIELD)
   // const handleChange = (event) => {
   //    console.log("event:", event)
   //    setCharacterData( {...characterData, [event.target.name]: event.target.value} )
   // }

   // !   CREATE A FUNCTION TO SUBMIT THE FORM
   // const handleSubmit = (event) => {
   //    event.preventDefault()
   //    props.characterSearch(characterData.searchterm)
   // }