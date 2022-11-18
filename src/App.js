import About from "./pages/About";
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
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </>  
  );
};

export default App;
