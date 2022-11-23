import { useRef } from "react";

const AddRecipe = () => {
  const titleRef = useRef("");
  const contentRef = useRef("");
  const imgUrlRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();

    const recipe = {
      title: titleRef.current.value,
      content: contentRef.current.value,
      imgUrl: imgUrlRef.current.value,
    };

    postOnFirebase(recipe);
    
    titleRef.current.value = "";
    contentRef.current.value = "";
    imgUrlRef.current.value = "";
  };

  const postOnFirebase = async (recipe) => {
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
    const data = await response.json();
  }

  return (
    <>
      <h2>Add New Recipe</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" ref={titleRef} />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea id="content" type="text" rows="6" ref={contentRef}></textarea>
        </div>
        <div>
          <label htmlFor="imgUrl">Image Url</label>
          <input id="imgUrl" type="text" ref={imgUrlRef} />
        </div>
        <div>
          <button>Add Recipe</button>
        </div>
      </form>
    </>
  );
};

export default AddRecipe;
