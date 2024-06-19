import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchBar from "./components/Searchbar";

function App() {
  return (
    <Router>
      <div className="App flex flex-col lg:flex-row">
        <Navbar />
        <div className="w-screen bg-red-500">
          <SearchBar />
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/movies" element={<div>Movies Page</div>} />
            <Route path="/tv-series" element={<div>TV Series Page</div>} />
            <Route path="/bookmark" element={<div>Bookmark Page</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;