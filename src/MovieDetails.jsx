// MovieDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams(); // Extract the movie ID from the URL
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  // Fetch movie details when the component mounts
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?i=${id}&apikey=9723cf87&plot=full`
        );
        const data = await response.json();

        if (data.Response === "True") {
          setMovie(data); // Set the movie data state if successful
        } else {
          setError(data.Error); // Set error state if the response is not successful
        }
      } catch (error) {
        setError("Failed to fetch movie details."); // Handle fetch errors
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  // Display the movie details
  return (
    <div>
      <h2>{movie.Title} ({movie.Year})</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Writer:</strong> {movie.Writer}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Language:</strong> {movie.Language}</p>
      <p><strong>Country:</strong> {movie.Country}</p>
      <p><strong>Awards:</strong> {movie.Awards}</p>
      <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
      <p><strong>Box Office:</strong> {movie.BoxOffice}</p>
      <p><strong>Production:</strong> {movie.Production}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Runtime:</strong> {movie.Runtime}</p>
      <p><strong>Released:</strong> {movie.Released}</p>
      <div>
        <strong>Ratings:</strong>
        {movie.Ratings.map((rating, index) => (
          <p key={index}>{rating.Source}: {rating.Value}</p>
        ))}
      </div>
    </div>
  );
};

export default MovieDetails;
