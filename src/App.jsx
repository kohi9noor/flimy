import React, { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'
import About from './AboutUs'
// key = 8b63dc36,

// api = https://www.omdbapi.com/?i=tt3896198&apikey=8b63dc36

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=8b63dc36"

const App = () => {
 const [movies, setMovies] = useState([]) 
 const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search);
  } 
  
  useEffect(() => {
    searchMovies("Avengers");
  }, []);
  return (
    <>
     <div className="app">
      <h1>Flimy</h1>

      <div className="search">
        <input
          
          value={searchTerm}
          placeholder="Search for movies"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
    <About />
    </>
   
    
  );
}

export default App