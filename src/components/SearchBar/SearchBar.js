import { useState } from 'react';
import { useHistory } from 'react-router-dom';
// styles
import './SearchBar.css'

const SearchBar = () => {
  const [term, setTerm] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('term', term);

    history.push(`/search?q=${term}`)
  }
 
  return ( 
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
          required
        />
      </form>
    </div>
   );
}
 
export default SearchBar;