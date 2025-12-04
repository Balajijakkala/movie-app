import React from "react";
import "./Header.css";

export default function Header({ theme }) {
  const posters = [
    "/src/assets/movies/m1.jpg",
    "/src/assets/movies/m2.jpg",
    "/src/assets/movies/m3.webp",
    "/src/assets/movies/m4.webp",
    "/src/assets/movies/m5.webp",
    "/src/assets/movies/m6.webp",
    "/src/assets/movies/m7.webp",
    "/src/assets/movies/m8.webp",
  ];

  return (
    <header className="header-container">
      {/* SCROLLING POSTERS */}
      <div className="poster-strip">
        {posters.map((p, index) => (
          <img key={index} src={p} className="poster" />
        ))}

        {/* duplicate posters for infinite loop */}
        {posters.map((p, index) => (
          <img key={index + posters.length} src={p} className="poster" />
        ))}
      </div>

      {/* DARK OVERLAY FOR CINEMATIC LOOK */}
      <div className="header-overlay"></div>

      {/* TEXT CONTENT */}
      <div className="header-content">
        <h1 className={`header-title ${theme}`}>
          Unlimited Movies, Just for You
        </h1>
        <p className={`header-sub ${theme}`}>
          Trending • Popular • Latest Releases
        </p>
      </div>
    </header>
  );
}
