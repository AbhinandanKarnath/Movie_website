// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieCard from "./MovieCard";
import MovieDetails from "./MovieDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import SearchIcon from "./search.svg";
// import "font-awesome/css/font-awesome.min.css";

import "./App.css";

const API_URL = "http://www.omdbapi.com/?apikey=9723cf87&plot=full"; 
const App = () => {
//   const [searchTerm, setSearchTerm] = useState("");

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      console.log(data)
      setMovies(data.Search || []);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
      setMovies([]);

    }
  };

  useEffect(() => {
    searchMovies("batman");
  }, []);

  return (
// <<<<<<< HEAD
    <Router>
    <Navbar />
      <div className="app">
        {/* <h1>Movie Adda</h1> */}
        <div className="search">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for movies"
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div className="container">
                {movies.length > 0 ? (
                  movies.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                  ))
                ) : (
                  <p>No movies found.</p>
                )}
              </div>
            }
          />
          <Route path="/movie/:id" element={<MovieDetails />} />
          
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
