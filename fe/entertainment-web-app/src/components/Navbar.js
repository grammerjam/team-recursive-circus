import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/tv series">TV Series</Link>
        </li>
        <li>
          <Link to="/bookmarked">Bookmarked</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
