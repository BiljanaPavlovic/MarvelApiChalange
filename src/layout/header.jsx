/** @format */

import React from "react";

export default function Header() {
  function clear(){
    localStorage.clear()
    window.location.reload()
  }
  return (
    <div>
      <img
        src="/marvel.jpg"
        alt="naslovna fotografija"
        className="marvel-img"
      />
      <h1>Marvel API Challenge</h1>
      <button onClick = {clear}>clear bookmarks</button>
    </div>
  );
}
