import { Link } from "react-router-dom";

const RecipeItem = (props) => {
  const rec = props.recipe;
  const urlStr = "/recipe/" + rec.id + "/";

  return (
    <>
      <h3>
        <Link
          to={{
            pathname: urlStr,
            state: { recipe: rec },
          }}
        >
          {rec.title}
        </Link>
      </h3>
      <img alt={rec.title} src={rec.imgUrl}></img>
      <p>{rec.content}</p>
    </>
  );
};

export default RecipeItem;
