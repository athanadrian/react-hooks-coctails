import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const Cocktail = props => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  const getCocktailById = async () => {
    try {
      const response = await fetch(`${baseUrl}${id}`);
      const data = await response.json();

      if (data.drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strGlass: glass,
          strCategory: category,
          strInstructions: instructions,
          strAlcoholic: info,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5
        } = data.drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5
        ];
        const normalizedDrink = {
          name,
          image,
          glass,
          info,
          category,
          instructions,
          ingredients
        };
        setCocktail(normalizedDrink);
      } else {
        console.log("Sorry no cocktail found!");
        setCocktail(null);
      }
    } catch (error) {
      console.log("Server error", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getCocktailById();
  }, [id]);

  return (
    <>
      {loading ? (
        <h2 className="section-title">Loading.....</h2>
      ) : cocktail === null ? (
        <h2 className="section-title">Sorry no cocktail found!!!</h2>
      ) : (
        <section className="section cocktail-section">
          <Link to="/" className="btn btn-primary">
            back home
          </Link>
          <h2 className="section-title">{cocktail.name}</h2>
          <div className="drink">
            <img src={cocktail.image} alt={cocktail.name} />
            <div className="drink-info">
              <p>name : {cocktail.name}</p>
              <p>category: {cocktail.category}</p>
              <p>info: {cocktail.info}</p>
              <p>glass : {cocktail.glass}</p>
              <p>instructions : {cocktail.instructions}</p>
              <p>
                ingredients :{" "}
                {cocktail.ingredients.map((ingredient, i) =>
                  ingredient ? <span key={i}>{ingredient}</span> : null
                )}
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default Cocktail;
