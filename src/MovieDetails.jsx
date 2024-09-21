import React from "react";
import { useLocation } from "react-router-dom"; 
import "./MovieDetails.css"; 

const MovieDetails = () => {
  const location = useLocation();
  const { movie } = location.state || {};

  if (!movie) {
    return <p>No movie data available</p>;
  }

  return (
    <div className="movie-details">
      <h2 className="movie-title">{movie.Title}</h2>
      <div className="movie-image">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"}
          alt={movie.Title}
        />
      </div>
    </div>
  );
};

export default MovieDetails;