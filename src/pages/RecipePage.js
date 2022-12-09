import Backdrop from "../components/Backdrop";
import Modal from "../components/DeleteRecipe";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

const RecipePage = () => {
  const history = useHistory();
  const [displayModal, setDisplayModal] = useState(false);
  const location = useLocation();
  const rec = location.state.recipe;

  const deleteRecipeHandler = () => {
    setDisplayModal(true);
  };

  const cancelDeleteRecipeHandler = () => {
    setDisplayModal(false);
  };

  const onDeleteHandler = async () => {
    const recipeId = rec.id;
    const response = await fetch(
      "https://recipes-danielfalbeschmidt-default-rtdb.europe-west1.firebasedatabase.app/recipes.json/" +
        recipeId,
      {
        method: "DELETE",
        body: JSON.stringify(null),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setDisplayModal(false);

    if (response.ok) {
      history.push("/");
    } else {
      const dialog = document.getElementById("dialog");
      dialog.innerHTML = "An error has occured, please try again later";
      dialog.style = "display:block";
    }
  };

  return (
    <>
      <h2>{rec.title}</h2>
      <p id="dialog" display="none"></p>
      <img alt={rec.title} src={rec.imgUrl}></img>
      <p>{rec.content}</p>
      <button onClick={deleteRecipeHandler}>Delete Recipe</button>
      {displayModal && (
        <>
          <Modal
            onDelete={onDeleteHandler}
            onCancel={cancelDeleteRecipeHandler}
          />
          <Backdrop onClick={cancelDeleteRecipeHandler} />
        </>
      )}
    </>
  );
};

export default RecipePage;
