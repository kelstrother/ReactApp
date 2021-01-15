import React from 'react'

function Species(props) {

    const url =`https://rickandmortyapi.com/api/character`

   
    const [species, setSpecies] = React.useState(null)  
   
   //  ! THE FUNCTION REQUESTING THE DATA FROM THE SOURCE (URL)
    const getSpecies = async () => {
       const response = await fetch(url)
       const data = await response.json()
       setSpecies(data)
       console.log('this is data', data)
    }
 
 
    React.useEffect(() => {
       getSpecies()
    }, [])

       return (
            <div>
               <h1>Rick and Morty</h1>
            </div>
      )
   }

export default Species
