import { useState } from "react";

const RecipeItem = ({ recipe }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [credentials, setCredentials] = useState(recipe);

  const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    fetch(`${process.env.REACT_APP_URL_API}/recipes/${recipe.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(response => response.json())
      .then(() => setIsEditing(false));
  };

  return (
    <li className="recipe-card">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" value={credentials.title} onChange={handleChange} />
          <input type="text" name="category" value={credentials.category} onChange={handleChange} />
          <input type="submit" value="Modifier" />
        </form>
      ) : (
        <>
          Nom de la recette : <strong>{recipe.title}</strong>
          <br />
          Nom de la catégorie : <strong>{recipe.category}</strong>
          <br />
          <button onClick={() => setIsEditing(true)}>Modifier</button>
        </>
      )}
    </li>
  );
};
