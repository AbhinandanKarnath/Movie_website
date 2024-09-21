// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieCard from "./MovieCard";
import MovieDetails from "./MovieDetails";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com/?apikey=9723cf87&plot=full"; 
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

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

  return (
    <Router>
      <div className="app">
        <h1>Movie Adda</h1>
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
        </Routes>
      </div>
    </Router>
  );
};

export default App;