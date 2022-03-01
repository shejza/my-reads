import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const isAllBooks = location.pathname.includes("allbooks");
  return (
    <nav className="navigation">
      <h1 className="navigation__title">MyReads</h1>
      {!isAllBooks ? (
        <Link to="/allbooks" className="navigation__navItem">
          All Books
        </Link>
      ) : (
        <Link to="/" className="navigation__navItem">
          Go Back
        </Link>
      )}
    </nav>
  );
}
