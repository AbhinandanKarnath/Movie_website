// MovieCard.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the MovieDetails page with movie data
    navigate("/details", { state: { movie } });
  };

  return (
    <div className="movie" onClick={handleClick}>
      <div>
        <p>{movie.Year}</p>
      </div>

      <div className="poster-container">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"}
          alt={movie.Title}
        />
      </div>

      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
// import React from 'react';

// const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
//   return (
//     <div className="movie" key={imdbID}>
//       <div>
//         <p>{Year}</p>
//       </div>

//       <div>
//         <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
//       </div>

//       <div>
//         <span>{Type}</span>
//         <h3>{Title}</h3>
//       </div>
//     </div>
//   );
// }

// export default MovieCard;