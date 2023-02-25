import { useRef, useEffect } from "react";
import { useGlobalContext } from "../../context/context";

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext();
  const refContainer = useRef(null);

  useEffect(() => {
    refContainer.current.focus();
  }, []);
  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
      <h2>search for anything</h2>
      <input
        ref={refContainer}
        type='text'
        className='form-input'
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
