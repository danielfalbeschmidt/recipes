import { useRef } from "react";

const AddRecipe = () => {
  const titleRef = useRef("");
  const contentRef = useRef("");
  const imgUrlRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();

    let titleVal = titleRef.current.value;

    if (titleVal === "") titleVal = "Unnamed Recipe";

    const recipe = {
      title: titleVal,
      content: contentRef.current.value,
      imgUrl: imgUrlRef.current.value,
    };

    postOnFirebase(recipe);

    titleRef.current.value = "";
    contentRef.current.value = "";
    imgUrlRef.current.value = "";
  };

  const postOnFirebase = async (recipe) => {
    const addRecipeStatus = document.getElementById("addRecipeStatus");
    try {
      const response = await fetch(
        "https://recipes-danielfalbeschmidt-default-rtdb.europe-west1.firebasedatabase.app/recipes.json",
        {
          method: "POST",
          body: JSON.stringify(recipe),
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error: " + response.status + response.statusText);
      }

      addRecipeStatus.innerHTML = "Recipe added successfully!";
    } catch (error) {
      addRecipeStatus.innerHTML =
        "An error has occured, please try again later";
      console.error(error);
    }
  };

  const hideStatus = () => {
    document.getElementById("addRecipeStatus").innerHTML = "Add Recipe";
  };

  return (
    <div>
    <h2 className="pageHeader">Add New Recipe</h2>
      <form className="addRecipeForm" onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" ref={titleRef} onChange={hideStatus} maxLength="50"/>
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            type="text"
            rows="6"
            ref={contentRef}
            onChange={hideStatus}
            maxLength="2000"
          ></textarea>
        </div>
        <div>
          <label htmlFor="imgUrl">Image url</label>
          <input
            id="imgUrl"
            type="text"
            ref={imgUrlRef}
            onChange={hideStatus}
            maxLength="4000"
          />
        </div>
        <div>
          <button id="addRecipeStatus">Add Recipe</button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;
