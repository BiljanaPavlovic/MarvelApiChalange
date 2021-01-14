/** @format */

import React from "react";

export default function Character({ name, description, image,save }) {
  return (
    <div className="one-character">
      <h3>{name}</h3>
      <img src={image} alt="character" />
      <p>{description}</p>
      <button>save{save}</button>
    </div>
  );
}
