import React from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function Watchlist({ movies, watchlist, toggleWatchlist }) {
  return (
    <>
      <h2>Watchlist</h2>
      <div className="watchlist">
        {watchlist.map((id) => {
          const movie = movies.find((m) => m.id === id);
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              isWatchlist={true}
              toggleWatchlist={toggleWatchlist}
            ></MovieCard>
          );
        })}
      </div>
    </>
  );
}
