import React, { useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const data = await fetch("movies.json");
      const json = await data.json();
      setMovies(json);
    }
    fetchMovies();
  }, []);

  return (
    <div className="movies-grid">
      {movies.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </div>
  );
}
