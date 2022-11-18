import Backdrop from "../components/Backdrop";
import Modal from "../components/DeleteRecipe";
import { useState } from "react";

const RecipePage = () => {
  const [displayModal, setDisplayModal] = useState(false);

  const deleteRecipeHandler = () => {
    setDisplayModal(true);
  };

  const cancelDeleteRecipeHandler = () => {
    setDisplayModal(false);
  };

  return (
    <>
      <h2>Recipe Page</h2>
      <button onClick={deleteRecipeHandler}>Delete Recipe</button>
      {displayModal && (
        <>
          <Modal onCancel={cancelDeleteRecipeHandler} />
          <Backdrop onClick={cancelDeleteRecipeHandler} />
        </>
      )}
    </>
  );
};

export default RecipePage;
