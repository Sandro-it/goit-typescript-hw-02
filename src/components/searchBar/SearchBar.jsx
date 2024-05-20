import { useState } from "react";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() !== "") {
      onSubmit(query);
      setQuery("");
    } else {
      toast.error("Please enter a search term");
    }
  };

  return (
    <header className={css.header}>
      <form className={css.searchBarForm} onSubmit={handleSubmit}>
        <input
          className={css.searchBarInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className={css.searchBarButton}>
          <FiSearch size="17px" />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
