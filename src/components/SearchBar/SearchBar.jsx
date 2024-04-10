import css from "./SearchBar.module.css";
import { useState } from "react";
import { toast } from "react-hot-toast";

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  function saveInput(event) {
    const inputValue = event.target.value;
    setQuery(inputValue);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (query.trim() === "") {
      toast.error("Field can't be empty");
      return;
    }
    onSubmit(query);
    setQuery("");
  }
  return (
    <div>
      <header className={css.header}>
        <form onSubmit={handleSubmit} className={css.bar}>
          <button type="submit" className={css.button}>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={saveInput}
            value={query}
            className={css.input}
          />
        </form>
      </header>
    </div>
  );
};

export default SearchBar;