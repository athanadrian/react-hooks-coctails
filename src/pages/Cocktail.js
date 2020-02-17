// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";

// const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

// const Cocktail = props => {
//   const { id } = useParams();
//   const [loading, setLoading] = useState(false);
//   const [cocktail, setCocktail] = useState(null);

//   const getCocktailById = async () => {
//     try {
//       const response = await fetch(`${baseUrl}${id}`);
//       const data = await response.json();

//       if (data.drinks) {
//         const {
//           strDrink: name,
//           strDrinkThumb: image,
//           strGlass: glass,
//           strCategory: category,
//           strInstructions: instructions,
//           strAlcoholic: info,
//           strIngredient1,
//           strIngredient2,
//           strIngredient3,
//           strIngredient4,
//           strIngredient5
//         } = data.drinks[0];
//         const ingredients = [
//           strIngredient1,
//           strIngredient2,
//           strIngredient3,
//           strIngredient4,
//           strIngredient5
//         ];
//         const normalizedDrink = {
//           name,
//           image,
//           glass,
//           info,
//           category,
//           instructions,
//           ingredients
//         };
//         setCocktail(normalizedDrink);
//       } else {
//         console.log("Sorry no cocktail found!");
//         setCocktail(null);
//       }
//     } catch (error) {
//       console.log("Server error", error);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     setLoading(true);
//     getCocktailById();
//   }, [id]);

//   console.log(cocktail);

//   return (
//     <>
//       {loading ? (
//         <h2 className="section-title">Loading.....</h2>
//       ) : cocktail === null ? (
//         <h2 className="section-title">Sorry no cocktail found!!!</h2>
//       ) : (
//         <section className="section cocktail-section">
//           <Link to="/" className="btn btn-primary">
//             back home
//           </Link>
//           <h2 className="section-title">{cocktail.name}</h2>
//           <div className="drink">
//             <img src={cocktail.image} alt={cocktail.name} />
//             <div className="drink-info">
//               <p>name : {cocktail.name}</p>
//               <p>category : {cocktail.category}</p>
//               <p>info : {cocktail.info}</p>
//               <p>glass : {cocktail.glass}</p>
//               <p>instructions : {cocktail.instructions}</p>
//               <p>
//                 ingredients :{" "}
//                 {cocktail.ingredients.map((ingredient, i) =>
//                   ingredient ? <span key={i}>{ingredient}</span> : null
//                 )}
//               </p>
//             </div>
//           </div>
//         </section>
//       )}
//     </>
//   );
// };

// export default Cocktail;
import React from "react";
import { useParams, Link } from "react-router-dom";

export default function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
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
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);
  if (loading) {
    return <h2 className="section-title">Loading...</h2>;
  }
  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  } else {
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
      ingredients
    } = cocktail;
    return (
      <section className="section cocktail-section">
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img src={image} alt={name} />
          <div className="drink-info">
            <p>name : {name}</p>
            <p>category: {category}</p>
            <p>info: {info}</p>
            <p>glass : {glass}</p>
            <p>instructions : {instructions}</p>
            <p>
              ingredients :{" "}
              {ingredients.map((item, index) => {
                return item ? <span key={index}>{item}</span> : null;
              })}
            </p>
          </div>
        </div>
      </section>
    );
  }
}
