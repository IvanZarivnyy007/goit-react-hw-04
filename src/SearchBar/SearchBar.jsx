
const SearchBar = () => {
    return (
        <div className="div">
            <header className="header">
  <form className="form">
    <input
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
      className="input"
    />
    <button className="button" type="submit">Search</button>
  </form>
</header>

        </div>
    )
}



export default SearchBar