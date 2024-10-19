import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const MovieList = ({ searchQuery }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const navigate = useNavigate(); // Initialize navigate

  const fetchMovies = async (query = "", page = 1) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${query || "movie"}&apikey=16b4f715&page=${page}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(prevMovies => [...prevMovies, ...data.Search]);
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch (err) {
      setError("Failed to fetch movies. Please check your internet connection or try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch movies when the component mounts or when the search query changes
  useEffect(() => {
    setMovies([]);
    fetchMovies(searchQuery, 1);
    setPage(1);
  }, [searchQuery]);

  const loadMoreMovies = () => {
    const nextPage = page + 1;
    fetchMovies(searchQuery, nextPage);
    setPage(nextPage);
  };

  const handleCardClick = (imdbID) => {
    navigate(`/movie/${imdbID}`); // Navigate to MovieDetails page on card click
  };

  if (loading && page === 1) return <p>Loading...</p>;
  if (error) return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-red-600 text-xl">{error}</p>
    </div>
  ); // Center error message

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map(movie => (
          <div 
            key={movie.imdbID} 
            className="border bg-slate-300 dark:bg-slate-700 rounded-lg overflow-hidden shadow-lg cursor-pointer"
            onClick={() => handleCardClick(movie.imdbID)} // Navigate on click
          >
            <img src={movie.Poster} alt={movie.Title} className="w-full h-auto" />
            <div className="p-2">
              <h3 className="text-lg font-semibold">{movie.Title}</h3>
              <p className="text-gray-600 dark:text-white">{movie.Year}</p>
            </div>
          </div>
        ))}
      </div>
      <button 
        onClick={loadMoreMovies} 
        className="mt-4 w-1/2 bg-secondary-400 text-white px-4 py-2 rounded-2xl" 
        disabled={loading}
      >
        {loading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
};

export default MovieList;
