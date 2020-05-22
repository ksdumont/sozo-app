import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <a href="/" className="navbar-brand">
        SOZO
      </a>
      <form className="form-inline">
        <input
          className="form-control mr-xs-2"
          type="search"
          placeholder="Search Song"
          aria-label="Search"
        />
        <button className="btn btn-link my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
