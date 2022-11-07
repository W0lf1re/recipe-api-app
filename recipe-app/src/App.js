import { useEffect, useState } from "react";
import FormRecipes from "./components/FormRecipes";
import RecipesList from "./components/RecipesList";

const styleH1 = {
  textAlign: "center",
};
console.log(process.env.REACT_APP_URL_API);

function App() {
  let [recipesList, setRecipesList] = useState([]);

  useEffect(() => {
    fetchAllRecipes();
  }, []);

  const fetchAllRecipes = () => {
    fetch(`${process.env.REACT_APP_URL_API}/recipes`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRecipesList(data);
      });
  };

  return (
    <div className="App">
      <h1 style={styleH1}>Voici vos recettes</h1>
      <FormRecipes fetchAllRecipes={fetchAllRecipes} />
      <RecipesList recipesList={recipesList} fetchAllRecipes={fetchAllRecipes} />
    </div>
  );
}

export default App;