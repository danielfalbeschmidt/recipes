import { Link } from "react-router-dom";

const RecipeItem = (props) => {
  const rec = props.recipe;
  const urlStr = "/recipe/" + rec.id + "/";

  return (
    <div className="recipeItem">
      <h3 className="itemHeader">
        <Link
          to={{
            pathname: urlStr,
            state: { recipe: rec },
          }}
        >
          {rec.title}
        </Link>
      </h3>
      <img className="thumbnail" alt={rec.title} src={rec.imgUrl}></img>
    </div>
  );
};

export default RecipeItem;
