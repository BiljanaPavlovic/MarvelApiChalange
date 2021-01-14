/** @format */

import React, { useEffect, useState } from "react";
import get from "../services";
import Character from "./character";

export default function CharacterList() {
  const [characters, setCharacter] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState([]);
//const [bookmark, setBookmark] = useState([]);




  useEffect(() => {
    get().then((data) => {
      console.log(data);
      setCharacter(data.data.results);
    });
  }, []);

function save() {
  return (localStorage.setItem("characters.id", JSON.stringify(characters.id))
  )
}


  /*useEffect(() => {
  localStorage.setItem("characters", JSON.stringify(characters));
  }, [characters]);
  console.log(localStorage);*/

  useEffect(() => {
    setFilteredCharacters(
      characters.filter((caracter) =>
        caracter.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, characters]);

  return (
    <div>
      <input
        type="text"
        placeholder="&#128269; Search"
        className="input-search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="container">
        {filteredCharacters.map((character, id) => (
          <Character
            key={id}
            name={character.name}
            description={character.description}
            image={character.thumbnail.path + "/portrait_medium.jpg"}
          
            {...character}
          />
        ))}
        {/*characters.map((character) => {
          return (
            <Character
              name={character.name}
              key={character.id}
              description={character.description}
              image={character.thumbnail.path + "/portrait_medium.jpg"}
            />
          );
        })*/}
      </div>
    </div>
  );
}
