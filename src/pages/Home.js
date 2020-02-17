import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import CocktailList from "../components/CocktailsList.js";
const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
//const { drinks } = require("../data/drinks");

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("br");
  const [cocktails, setCocktails] = useState([]);

  const getCocktails = async () => {
    try {
      const response = await fetch(`${baseUrl}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const normalizedDrinks = drinks.map(drink => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass
          } = drink;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass
          };
        });
        setCocktails(normalizedDrinks);
      } else {
        console.log("NO DRINKS: ", 0);
      }
      //setCocktails(drinks);
    } catch (error) {
      console.log("Server error: ", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getCocktails();
    // promise resolving
    // useEffect(() => {
    //   fetch(`${baseUrl}${searchTerm}`)
    //     .then(response => response.json())
    //     .then(data => setCocktails(data));
  }, [searchTerm]);
  console.log(cocktails);
  return (
    <main>
      <Search setSearchTerm={setSearchTerm} />
      <CocktailList loading={loading} cocktails={cocktails} />
    </main>
  );
};

export default Home;
