/** @format */

import React from "react";

export default function Character({ name, description, image,save }) {

  const saveCharacter = (name, image, description) => {
    const character = {
      name,
      image,
      description
    }
    let characters = JSON.parse(localStorage.getItem('characters'))
    if (!characters.find(o => o.name === character.name ))
    characters.push(character)
    
   // characters.push(character)

     localStorage.setItem('characters', JSON.stringify(characters))
   window.location.reload()
    }

  return (
    <div className="one-character">
      <h3>{name}</h3>
      <img src={image} alt="character" />
      <p>{description}</p>
      <button onClick={()=>saveCharacter(name, image, description)}>save</button>
    </div>
  );
}