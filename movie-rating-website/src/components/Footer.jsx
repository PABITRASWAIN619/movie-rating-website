import { FaXTwitter } from "react-icons/fa6";
import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTelegram
} from "react-icons/fa";

function Footer({ loadTrending, loadTopRated, handleGenre }) {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-section">
          <h2 className="footer-logo">🎬 Movieflix</h2>
          <p>
            Discover trending, top rated and popular movies
            powered by the TMDB API.
          </p>
        </div>

        {/* EXPLORE */}
        <div className="footer-section">
          <h3>Explore</h3>

          <ul>
            <li onClick={loadTrending}>Trending</li>
            <li onClick={loadTopRated}>Top Rated</li>
            <li onClick={() => handleGenre(28)}>Action</li>
            <li onClick={() => handleGenre(35)}>Comedy</li>
            <li onClick={() => handleGenre(27)}>Horror</li>
            <li onClick={() => handleGenre(16)}>Animated</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div className="footer-section">
          <h3>Follow Me</h3>

          <div className="social-icons">

            <a
              href="https://x.com/X"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter/>
            </a>

            <a
              href="https://web.telegram.org/a/"
              target="_blank"
              rel="noreferrer"
            >
              <FaTelegram />
            </a>

            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>

          </div>

        </div>

      </div>

      <div className="tmdb-credit">
        This product uses the TMDB API but is not endorsed or
        certified by TMDB.
      </div>

      <div className="footer-bottom">
        © 2026 Movieflix | Built with React 🚀
      </div>

    </footer>
  );
}

export default Footer;