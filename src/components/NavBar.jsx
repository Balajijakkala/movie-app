import React from "react";
import "./NavBar.css";

export default function NavBar({
  theme,
  toggleTheme,
  searchTerm,
  setSearchTerm,
  handleSearch,
  searching,
  clearSearch,
}) {
  return (
    <nav className={`navbar ${theme}`}>
      <div className="nav-inner">
        {/* LOGO */}
        <div className={`logo ${theme}`}>
          <div className={`mark ${theme}`}>SS</div>
          <span className="{theme}">CINEMAS</span>
        </div>

        {/* SEARCH BAR */}
        <form onSubmit={handleSearch} className="nav-search">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`search-input ${theme}`}
          />
        </form>

        {/* ACTION BUTTONS */}
        <div className="nav-actions">
          {searching && (
            <button className="icon-btn" onClick={clearSearch}>
              ✕
            </button>
          )}

          {/* THEME TOGGLE */}
          <button className="icon-btn" onClick={toggleTheme}>
            {theme === "dark" ? "🌞" : "🌚"}
          </button>
        </div>
      </div>
    </nav>
  );
}
