import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="header">
        <span className="header__logo" role="img" aria-label="Logo">
          {" "}
          💸 Budget Planning 💸
        </span>
        <nav className="header__nav"></nav>
        <Link to="/">Home Page</Link> | <Link to="/income">Income</Link> |{" "}
        <Link to="/category">Category</Link> | <Link to="/pie">Pie Chart</Link>{" "}
        | <Link to="/bar">Bar Chart</Link>
      </header>
    </div>
  );
}
export default Header;
