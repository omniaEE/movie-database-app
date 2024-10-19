import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react'; // Import useState
import Navbar from './components/layouts/Navbar';
import HomePage from './pages/home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';

function App() {
  const [searchQuery, setSearchQuery] = useState(""); // State to hold search query

  return (
    <Router>
      <Navbar setSearchQuery={setSearchQuery} />
      <Routes>
        <Route 
          path="/" 
          element={<HomePage searchQuery={searchQuery} />} // Pass search query to HomePage
        />
        <Route path="/movie/:imdbID" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
