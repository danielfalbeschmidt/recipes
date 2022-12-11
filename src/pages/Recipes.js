import { useState, useEffect } from "react";
import RecipeItem from "./RecipeItem";

const Recipes = () => {
  const [RecipeItems, setRecipeItems] = useState([]);

  const fetchRecipes = async () => {
    const response = await fetch(
      "https://recipes-danielfalbeschmidt-default-rtdb.europe-west1.firebasedatabase.app/recipes.json"
    );

    const data = await response.json();

    const fetchedRecipes = [];

    for (const key in data) {
      fetchedRecipes.push({
        id: key,
        title: data[key].title,
        content: data[key].content,
        imgUrl: data[key].imgUrl,
      });
    }

    const recipeItems = [];

    for (const recipe of fetchedRecipes) {
      recipeItems.push(<RecipeItem key={recipe["id"]} recipe={recipe}/>);
    }

    setRecipeItems(recipeItems);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <>
      <h2 className="pageHeader">All Recipes</h2>
      <div>{RecipeItems}</div>
    </>
  );
};

export default Recipes;
