import About from "./pages/AddRecipe";
import RecipePage from "./pages/RecipePage";
import Recipes from "./pages/Recipes";
import Navigation from "./components/Navigation";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Recipes />
        </Route>
        <Route path="/recipe">
          <RecipePage />
        </Route>
        <Route path="/addrecipe">
          <About />
        </Route>
      </Switch>
    </>  
  );
};

export default App;
