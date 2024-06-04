import React, { useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);

  const [search, setSearch] = useState("");

  const [genre, setGenre] = useState("All");
  const [rating, setRating] = useState("All");

  useEffect(() => {
    async function fetchMovies() {
      const data = await fetch("movies.json");
      const json = await data.json();
      setMovies(json);
    }
    fetchMovies();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const matchesGenre = (movie, genre) => {
    return genre === "All" || movie.genre === genre.toLowerCase();
  };

  const matchesRating = (movie, rating) => {
    switch (rating) {
      case "All":
        return true;
      case "good":
        return movie.rating >= 8;
      case "Ok":
        return movie.rating >= 5 && movie.rating < 8;
      case "Bad":
        return movie.rating < 5;
      default:
        return false;
    }
  };

  const matchesSearch = (movie, search) => {
    return movie.title.toLowerCase().includes(search.toLowerCase());
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      matchesGenre(movie, genre) &&
      matchesRating(movie, rating) &&
      matchesSearch(movie, search)
    );
  });

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  return (
    <div>
      <input
        className="search-input"
        type="text"
        placeholder="Search movies"
        value={search}
        onChange={handleSearchChange}
        id="search-bar"
      />

      <div className="filter-bar">
        <div className="filter-slot">
          <label>
            {" "}
            Genre
            <select
              className="filter-dropdown"
              value={genre}
              onChange={handleGenreChange}
              id="genre-filter"
            >
              <option>All</option>
              <option>Action</option>
              <option>Drama</option>
              <option>Fantasy</option>
              <option>Horror</option>
            </select>
          </label>
        </div>
        <div className="filter-slot">
          <label>
            {" "}
            Rating
            <select
              className="filter-dropdown"
              value={rating}
              onChange={handleRatingChange}
              id="rating-filter"
            >
              <option>All</option>
              <option>good</option>
              <option>Ok</option>
              <option>Bad</option>
            </select>
          </label>
        </div>
      </div>

      <div className="movies-grid">
        {filteredMovies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}
