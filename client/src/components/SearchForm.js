import React from "react";

const SearchForm = (props) => {
  return (
    <form className="search-track">
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Song" />
      </div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Artist" />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        onClick={props.searchTrack}
      >
        Search
      </button>
    </form>
  );
};
export default SearchForm;
