import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="header">
      <h1><Link to="/">Recipes</Link></h1>
      <nav>
        <ul>
          <li>
            <Link to="/">All Recipes</Link>
          </li>
          <li>
            <Link to="/addrecipe">Add Recipe</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
