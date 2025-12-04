import React from "react";
import "./Explore.css";

export default function ExplorerSection({
  mainMovies,
  loading,
  searching,
  searchTerm,
  setSelectedMovie,
  theme,
}) {
  return (
    <section className="explore container">
      {/* SECTION TITLE */}
      <h2 className={`h2 mb-8 ${theme}`}>
        {searching && searchTerm
          ? `Search Results for "${searchTerm}"`
          : "Explore"}
      </h2>

      {/* LOADING SPINNER */}
      {loading && (
        <div className="center" style={{ padding: "40px 0" }}>
          <div className="loader"></div>
        </div>
      )}

      {/* NO RESULTS */}
      {!loading && mainMovies.length === 0 && (
        <p className="small">No movies found.</p>
      )}

      {/* MOVIE GRID */}
      <div className="grid">
        {!loading &&
          mainMovies.map((movie) => (
            <div
              key={movie.id}
              className="card"
              onClick={() => setSelectedMovie(movie)}
            >
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://img.icons8.com/ios/200/image--v1.png"
                }
                alt={movie.title}
                className="poster"
                draggable="false"
              />

              <div className="body">
                <h2 className="title" title={movie.title}>
                  {movie.title}
                </h2>
                <span className="sub">⭐ {movie.vote_average?.toFixed(1)}</span>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
