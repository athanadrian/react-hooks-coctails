import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import CocktailList from "../components/CocktailsList.js";
const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("a");
  // const [searchOption, setSearchOption] = useState("s");
  const [cocktails, setCocktails] = useState([]);

  const getCocktails = async () => {
    try {
      // const response = await fetch(`${baseUrl}${searchOption}=${searchTerm}`);
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
    } catch (error) {
      console.log("Server error: ", error);
    }
    setLoading(false);
  };

  // const handleSearchOption = option => {
  //   if (option === "name") {
  //     console.log("s");
  //     setSearchOption("s");
  //   } else if (option === "letter") {
  //     console.log("f");
  //     setSearchOption("f");
  //   } else if (option === "ingredient") {
  //     console.log("i");
  //     setSearchOption("i");
  //   }
  // };

  useEffect(() => {
    setLoading(true);
    getCocktails();
    // promise resolving
    // useEffect(() => {
    //   fetch(`${baseUrl}${searchTerm}`)
    //     .then(response => response.json())
    //     .then(data => setCocktails(data));
  }, [searchTerm]);
  return (
    <main>
      <Search
        setSearchTerm={setSearchTerm}
        // handleSearchOption={handleSearchOption}
      />
      <CocktailList loading={loading} cocktails={cocktails} />
    </main>
  );
};

export default Home;
