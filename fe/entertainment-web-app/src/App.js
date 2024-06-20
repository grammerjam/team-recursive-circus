import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/movies" element={<div>Movies Page</div>} />
          <Route path="/tv-series" element={<div>TV Series Page</div>} />
          <Route path="/bookmark" element={<div>Bookmark Page</div>} />
        </Routes>
        <Signup/>
      </div>
    </Router>
  );
}

export default App;