import React from "react";
import CocktailItem from "./CocktailItem";

const CocktailList = ({ loading, cocktails }) => {
  return (
    <>
      {loading ? (
        <h2 className="section-title">Loading.....</h2>
      ) : cocktails.length > 0 ? (
        <section className="section">
          <h2 className="section-title">cocktails</h2>
          <div className="cocktails-center">
            {cocktails.map(cocktail => (
              <CocktailItem key={cocktail.id} {...cocktail} />
            ))}
          </div>
        </section>
      ) : (
        <h2 className="section-title">
          Sorry no cocktails found with such criteria!!!
        </h2>
      )}
    </>
  );
};

export default CocktailList;
