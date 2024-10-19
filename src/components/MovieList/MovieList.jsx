import React, { useState, useEffect } from 'react';

const MovieList = ({ searchQuery }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  // Fetch movies
  const fetchMovies = async (query = "", page = 1) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${query || "movie"}&apikey=16b4f715&page=${page}`);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(prevMovies => [...prevMovies, ...data.Search]);
      } else {
        setMovies([]);
        setError(data.Error);
      }
    } catch (err) {
      setError("Failed to fetch movies. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setMovies([]); // Reset movie list when searchQuery changes
    fetchMovies(searchQuery, 1);
    setPage(1); // Reset page
  }, [searchQuery]);

  const loadMoreMovies = () => {
    const nextPage = page + 1;
    fetchMovies(searchQuery, nextPage);
    setPage(nextPage);
  };

  if (loading && page === 1) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map(movie => (
          <div key={movie.imdbID} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={movie.Poster} alt={movie.Title} className="w-full h-auto" />
            <div className="p-2">
              <h3 className="text-lg font-semibold">{movie.Title}</h3>
              <p className="text-gray-600">{movie.Year}</p>
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
