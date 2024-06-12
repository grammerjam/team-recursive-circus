import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import homeIcon from "../assets/icon-nav-home.svg";
import moviesIcon from "../assets/icon-nav-movies.svg";
import tvSeriesIcon from "../assets/icon-nav-tv-series.svg";
import bookmarkIcon from "../assets/icon-nav-bookmark.svg";
import avatar from "../assets/image-avatar.png";

const Navbar = () => {
  return (
    <nav className="bg-[#161d2f] text-white p-4 flex lg:flex-col lg:h-screen lg:w-20 justify-between items-center">
      <img
        src={logo}
        alt="Logo"
        className="w-[25px] h-[20px] md:w-[32px] md:h-[25.6px]"
      />
      <div className="flex space-x-4 lg:flex-col lg:space-x-0 lg:space-y-8">
        <Link to="/">
          <img src={homeIcon} alt="Home" className="w-6 h-6" />
        </Link>
        <Link to="/movies">
          <img src={moviesIcon} alt="Movies" className="w-6 h-6" />
        </Link>
        <Link to="/tv-series">
          <img src={tvSeriesIcon} alt="TV Series" className="w-6 h-6" />
        </Link>
        <Link to="/bookmark">
          <img src={bookmarkIcon} alt="Bookmark" className="w-6 h-6" />
        </Link>
      </div>
      <img
        src={avatar}
        alt="Avatar"
        className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] lg:w-[40] lg:h-[40]"
      />
    </nav>
  );
};

export default Navbar;
