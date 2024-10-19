import './App.css';
import { useState } from 'react'; 
import Navbar from './components/layouts/Navbar';
import HomePage from './pages/home/Home';

function App() {
  const [searchQuery, setSearchQuery] = useState(""); // State to manage the search query

  return (
    <>
      {/* Pass searchQuery and setSearchQuery to Navbar and HomePage */}
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <HomePage searchQuery={searchQuery} />
    </>
  );
}

export default App;
