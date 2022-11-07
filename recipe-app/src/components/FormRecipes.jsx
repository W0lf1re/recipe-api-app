import { useState } from "react";

const FormRecipes = ({ fetchAllRecipes }) => {
  const [credentials, setCredentials] = useState({});

  const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({
      ...credentials,
      [name]: value
    });
    console.log(credentials);
  };

  const handleSubmit = event => {
    event.preventDefault();

    fetch(`${process.env.REACT_APP_URL_API}/recipes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(response => response.json())
      .then(() => {
        fetchAllRecipes();
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Entrez le titre de la recette"
        onChange={handleChange}
      />
      <input
        type="text"
        name="category"
        placeholder="Entrez le catégorie de la recette"
        onChange={handleChange}
      />
      <input type="submit" value="Ajouter" />
    </form>
  );
};

export default FormRecipes;
