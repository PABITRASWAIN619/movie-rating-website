import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">

      <Link to="/" className="logo">
        MOVIEFLIX
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <a href="#">Trending</a>
        <a href="#">Top Rated</a>
      </div>

    </div>
  );
}

export default Navbar;