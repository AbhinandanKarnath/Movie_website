import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import SearchIcon from "./search.svg";
import "font-awesome/css/font-awesome.min.css";

import "./App.css";

const API_URL = "http://www.omdbapi.com/?apikey=9723cf87";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();


    if (data.Search) {
      setMovies(data.Search);
    }
  };

  useEffect(() => {
    searchMovies("SpiderMan");
  }, []);

  return (
    <div className="app">
      <h1>Movie Adda</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}

        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>


      <div className="container">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.imdbID} className="movie">
              <div>
                <p>{movie.Year}</p>
              </div>
              <div>
                <img
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : "https://via.placeholder.com/400"
                  }
                  alt={movie.Title}
                />
              </div>
              <div>
                <span>{movie.Title}</span>
              </div>
            </div>
          ))
        ) : (
          <h2>No movies found</h2>
        )}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Use Navbar component here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};


export default App;
