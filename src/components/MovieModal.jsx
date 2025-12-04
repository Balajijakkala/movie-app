import React from "react";
import "./MovieModal.css";

export default function MovieModal({ selectedMovie, setSelectedMovie }) {
  if (!selectedMovie) return null;

  return (
    <div className="modal-overlay" onClick={() => setSelectedMovie(null)}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* CLOSE BUTTON */}
        <button className="close-btn" onClick={() => setSelectedMovie(null)}>
          ✕
        </button>

        {/* POSTER */}
        <img
          className="modal-poster"
          src={
            selectedMovie.poster_path
              ? `https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`
              : "https://img.icons8.com/ios/200/image--v1.png"
          }
          alt={selectedMovie.title}
        />

        {/* CONTENT */}
        <div className="modal-content">
          <h2>{selectedMovie.title}</h2>

          {/* META INFO */}
          <div className="meta-row">
            ⭐{" "}
            <span className="rating">
              {selectedMovie.vote_average?.toFixed(1)}
            </span>
            <span>• {selectedMovie.release_date}</span>
          </div>

          {/* DESCRIPTION */}
          <p>{selectedMovie.overview || "No overview available."}</p>
        </div>
      </div>
    </div>
  );
}
