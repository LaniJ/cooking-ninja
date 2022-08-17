import { Link } from "react-router-dom"

// components
import SearchBar from "../SearchBar/SearchBar";

// styles
import './Navbar.css';

const Navbar = () => {
  return ( 
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Lani's Cooking Ninja</h1>
        </Link>
        <SearchBar />
        <Link to="/create"> Create Recipe</Link>
      </nav>
    </div>
   );
}
 
export default Navbar;
