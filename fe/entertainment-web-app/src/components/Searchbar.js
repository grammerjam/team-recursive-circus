import React, { useState } from "react";
import searchIcon from "../assets/icon-search.svg";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Placeholder for search functionality
  };

  return (
    <form onSubmit={handleSearch} className="flex items-start bg-amber-600">
      <img
        src={searchIcon}
        alt="Search Icon"
        className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] mr-2"
      />
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for movies or TV series"
        className="bg-transparent focus:outline-none text-white placeholder-gray-400 flex-grow"
      />
      <button type="submit" className="hidden">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
