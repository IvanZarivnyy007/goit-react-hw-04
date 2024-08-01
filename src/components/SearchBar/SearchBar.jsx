import { Input, Button } from 'antd';
import css from "./SearchBar.module.css"

const SearchBar = ({ onSubmit ,setInput }) => {
  return (
    <div>
      <header className={css.header}>
        <form className={css.form}>
          <Input
            className={css.input}
            type="text"
            placeholder="Search images and photos"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <Button className={css.button} onClick={onSubmit} type="submit">
            Search
          </Button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
