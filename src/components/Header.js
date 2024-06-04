import React from "react";
import "../styles.css";

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src="logo.png" alt="movieduck"/>
      <h2 className="app-subtitle">Welcome to MovieDuck</h2>
    </div>
  );
}