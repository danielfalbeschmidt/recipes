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
    try {
      const response = await fetch(
        "https://recipes-danielfalbeschmidt-default-rtdb.europe-west1.firebasedatabase.app/recipes/" +
          rec.id,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Error: " + response.status + response.statusText);
      }

      history.push("/");
    } catch (error) {
      const deleteErrorStatus = document.getElementById("deleteErrorStatus");
      deleteErrorStatus.innerHTML =
        "An error has occured, please try again later";
      deleteErrorStatus.style = "display:block";

      console.error(error);
    }

    setDisplayModal(false);
  };

  return (
    <>
      <h2 className="pageHeader">{rec.title}</h2>
      <p id="deleteErrorStatus" display="none"></p>
      <div className="recipeContent">
        <img className="recipeImg" alt={rec.title} src={rec.imgUrl}></img>
        <p>{rec.content}</p>
        {displayModal && (
          <>
            <Modal
              onDelete={onDeleteHandler}
              onCancel={cancelDeleteRecipeHandler}
            />
            <Backdrop onClick={cancelDeleteRecipeHandler} />
          </>
        )}
      </div>
      <button className="deleteButton" onClick={deleteRecipeHandler}>
        Delete Recipe
      </button>
    </>
  );
};

export default RecipePage;
