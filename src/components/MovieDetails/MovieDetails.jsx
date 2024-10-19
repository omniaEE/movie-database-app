import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get route params

const MovieDetails = () => {
  const { imdbID } = useParams(); // Get imdbID from the URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovieDetails = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${imdbID}&apikey=16b4f715`
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (data.Response === "True") {
        setMovie(data);
      } else {
        setError(data.Error);
      }
    } catch (err) {
      setError("Failed to fetch movie details. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieDetails(); // Fetch movie details when component mounts
  }, [imdbID]);

  if (loading) return <p className="text-center text-xl">Loading...</p>;
  if (error) return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-red-500 text-xl">{error}</p>
    </div>
  ); // Center error message

  return (
    <div className="bg-white dark:bg-gray-900 p-4 min-h-screen">
      {movie && (
        <div className="flex row">
          <div className="max-w-2xl mx-auto mt-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full h-auto mt-4 rounded-lg shadow-md"
            />
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
              {movie.Title} ({movie.Year})
            </h1>
          </div>

          <div className="max-w-2xl mx-auto mt-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="mt-20 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Genre:</strong> {movie.Genre}
              </p>
              <p>
                <strong>Director:</strong> {movie.Director}
              </p>
              <p>
                <strong>Actors:</strong> {movie.Actors}
              </p>
              <p>
                <strong>Plot:</strong> {movie.Plot}
              </p>
              <p>
                <strong>Rating:</strong> {movie.imdbRating}
              </p>
              <p>
                <strong>Runtime:</strong> {movie.Runtime}
              </p>
              {/* Add more details as needed */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
