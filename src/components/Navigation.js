import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <header className="header">
      <h2>Recipes</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">All Recipes</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
