import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

const CharacterList = () => {
const [state, setState] = useState([]); 

  // DONE: Add useState to track data from useEffect

  useEffect(
    () => 
      axios
      .get("https://rickandmortyapi.com/api/character")
      // .then(response=>console.log(response.data.results))
      .then(response => setState(response.data.results))
      .catch (error => console.log("uh-oh!", error.message))
            
    // DONE: Add API Request here - must run in `useEffect`
    //  Important: verified the 2nd `useEffect` parameter: the dependancies array!
  , []);

      return (
        <section className="character-list">
          {state.map(char => (
            <CharacterCard key={char.id} name={char.name} image={char.image} species={char.species} status={char.status}/>
          ))}
          
        </section>
      );
}
// TODO: was inside h2- `array.map()` over your state here!

export default CharacterList



