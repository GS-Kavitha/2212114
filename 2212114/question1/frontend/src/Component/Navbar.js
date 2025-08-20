import React from "react";

function Navbar({ setPage }) {
  return (
    <nav className="navbar">
      <button onClick={() => setPage("shortener")}>Shortener</button>
      <button onClick={() => setPage("stats")}>Statistics</button>
    </nav>
  );
}

export default Navbar;
