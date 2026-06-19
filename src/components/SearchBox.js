import { useState } from "react";
import PropTypes from "prop-types";
import { publicAsset } from "../utils/publicAsset";
import "./SearchBox.css";

const SearchBox = ({ className = "", variant = "light", initialValue = "" }) => {
  const [query, setQuery] = useState(initialValue);

  const handleSubmit = (event) => {
    event.preventDefault();

    const cleanQuery = query.trim();

    if (!cleanQuery) {
      return;
    }

    window.location.href = `/search?q=${encodeURIComponent(cleanQuery)}`;
  };

  return (
    <form
      className={`site-search site-search-${variant} ${className}`}
      onSubmit={handleSubmit}
      role="search"
    >
      <input
        type="search"
        value={query}
        placeholder="Поиск"
        aria-label="Поиск по сайту"
        onChange={(event) => setQuery(event.target.value)}
      />
      <button type="submit" aria-label="Найти">
        <img src={publicAsset("./iconoir-search.svg")} alt="" />
      </button>
    </form>
  );
};

SearchBox.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(["light", "dark"]),
  initialValue: PropTypes.string,
};

export default SearchBox;
