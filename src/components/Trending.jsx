import React from "react";
import "./Trending.css";

export default function TrendingSection({ trending, setSelectedMovie, theme }) {
  return (
    <section className="trending-section container">
      {/* SECTION TITLE */}
      <div className="section-head">
        <h2 className={`h2 ${theme}`}>Trending Now</h2>
      </div>

      {/* HORIZONTAL SCROLL ROW */}
      <div className="row">
        {trending.map((movie) => (
          <div
            key={movie.id}
            className="movie-card"
            onClick={() => setSelectedMovie(movie)}
          >
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
                  : "https://img.icons8.com/ios/200/image--v1.png"
              }
              alt={movie.title}
            />

            {/* RATING TAG */}
            <div className="movie-meta">
              ⭐{" "}
              <span className="rating">{movie.vote_average?.toFixed(1)}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
