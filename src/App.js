import React, {useState, useEffect} from "react";
import axios from "axios";
import './App.css';
import Character from "./components/Character";

const App = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then((res) =>{
        setCharacters(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
      {characters.map((character, index) => {
        return(
          <Character
          key={`Characters${index}`}
          name={character.name}
          homeworld={character.homeworld}
          gender={character.gender}
          height={character.height}
          mass={character.mass} />
        )
      })}
    </div>
  );
}

export default App;


 // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.