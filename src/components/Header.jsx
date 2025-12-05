import React from "react";
import "./Header.css";

import p1 from "/src/assets/movies/m1.jpg";
import p2 from "/src/assets/movies/m2.jpg";
import p3 from "/src/assets/movies/m3.webp";
import p4 from "/src/assets/movies/m4.webp";
import p5 from "/src/assets/movies/m5.webp";
import p6 from "/src/assets/movies/m6.webp";
import p7 from "/src/assets/movies/m7.webp";
import p8 from "/src/assets/movies/m8.webp";

export default function Header({ theme }) {
  const posters = [p1, p2, p3, p4, p5, p6, p7, p8];

  return (
    <header className="header-container">
      <div className="poster-strip">
        {posters.map((p, index) => (
          <img key={index} src={p} className="poster" />
        ))}

        {posters.map((p, index) => (
          <img key={index + posters.length} src={p} className="poster" />
        ))}
      </div>

      <div className="header-overlay"></div>

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
