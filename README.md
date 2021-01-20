# Rick and Morty Catalog
| Phase One | Phase Two| Phase Three |
| :---: |  :---: | :---: |
| <img src="https://media.giphy.com/media/3o7TKuAfCHifvPdcxG/giphy.gif" width="250"> | <img src="https://media.giphy.com/media/afqT2ykIlYcVi/giphy.gif" width="250">  | <img src="https://media.giphy.com/media/1zkMdevx4zPh7Oft1a/giphy.gif" width="250"> |
## Project Links

- [GitHub Repository](https://github.com/kelstrother/ReactApp)
- [Live App Link](https://rickandmorty-characterverse.netlify.app)
<hr>

### Project Description

A simple frontend app built with React. Taking data from the [Rick and Morty API](https://rickandmortyapi.com/), I will create a catalog of searchable characters that will display a few attributes about the searched character.
<hr>

### API

The [Rick and Morty API](https://rickandmortyapi.com/) provides three main sections of data (Character, Location and Episode). Inside each of those is a plethora of related data available. 

### API Snippet

<details>
  <summary>Click for Snippet</summary>
  
``` js
{
  "info": {
    "count": 671,
    "pages": 34,
    "next": "https://rickandmortyapi.com/api/character/?page=2",
    "prev": null
  },
  "results": [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "location": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        // ...
      ],
      "url": "https://rickandmortyapi.com/api/character/1",
      "created": "2017-11-04T18:48:46.250Z"
    },
    // ...
  ]
}
```
</details>
<hr>

## Wireframes & Architecture


- [App Wireframe](https://res.cloudinary.com/kels-cloud/image/upload/v1611165024/Unit%202/Wireframe.jpg)

- [React App Architecture](https://res.cloudinary.com/kels-cloud/image/upload/v1611164787/Unit%202/Architecture.jpg)

<hr>


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Find and use external api 
- Create pages
- Build components
- Render data on page 
- Allow user to interact with the page
- Basic Styling

#### PostMVP EXAMPLE

- Create interactive animations
<hr>

## Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | State |
| --- | :---: | :---: | 
| Main | This will be a creative cover page| 
| App | This will render species and species card| 
| Nav | This will render the Title Page, Database and About page | 
| About | Description about the App | 
| Species (data list)| This will be where the initial data pull will take place | 
| SpeciesCard| This will render the searched for data | 
| Form| This will take in the text that the user types. It will also include a button | 
<hr>

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Main | H | 2hrs| N/A | N/A |
| Adding About | H | .5hrs| N/A | N/A |
| Adding Nav | H | 1hr| N/A | N/A |
| Adding Form | H | 3hrs| N/A | N/A |
| Working with API | H | 10hrs| N/A | N/A|
| Styling | H | 6hrs| N/A | N/A|
| Total | H | 6hrs| 5hrs | 5hrs |
<hr>

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 
<hr>

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
