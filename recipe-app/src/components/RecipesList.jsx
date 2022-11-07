const RecipesList = ({ recipesList, fetchAllRecipes, setIsEditing }) => {
  const handleDelete = id => {
    fetch(`${process.env.REACT_APP_URL_API}/recipes/${id}`, {
      method: "DELETE"
    }).then(() => {
      fetchAllRecipes();
    });
  };
  const handleUpdate = id => {
    setIsEditing(true);
    console.log("update");
  };

  return (
    <ul className="recipes-list">
      {recipesList.map(recipe => (
        <li className="recipe-card" key={recipe.id}>
          Nom de la recette : <strong>{recipe.title}</strong>
          <br />
          Nom de la catégorie : <strong>{recipe.category}</strong>
          <br />
          <button onClick={() => handleUpdate(recipe.id)}>Modifier</button>
          <button onClick={() => handleDelete(recipe.id)}>Supprimer</button>
        </li>
      ))}
    </ul>
  );
};

export default RecipesList;
