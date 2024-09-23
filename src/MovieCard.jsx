// MovieCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/movie/${imdbID}`); 
 };

  return (
    <div className="movie" onClick={handleCardClick}>
      <div>
        <p>{Year}</p>
      </div>
      <div>
        <img
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
          alt={Title}
        />
      </div>
      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;

/*
// MovieCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css"; // Ensure some styling is added for proper display

const MovieCard = ({ movie }) => {
  return (
    <Link
      to={`/movie/${movie.imdbID}`}
      state={{ movie }} // Passing the movie data as state
      className="movie-card-link"
    >
      <div className="movie-card">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"}
          alt={movie.Title}
        />
        <div className="movie-card-details">
          <span>{movie.Type}</span>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;

*/