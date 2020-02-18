import React, { useRef, useEffect, useState } from "react";

const Search = ({ setSearchTerm, handleSearchOption }) => {
  const [searchOption, setSearchOption] = useState("");
  const searchRef = useRef("");

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleRadioChange = e => {
    setSearchOption(e.target.value);
  };

  const handleSearch = e => {
    //setSearchTerm(e.target.value);
    handleSearchOption(searchOption);
    setSearchTerm(searchRef.current.value);
  };

  return (
    <section className="section">
      <div className="section-title">Find Cocktails</div>
      <form className="form search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search for the cocktail you wish</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="search cocktails"
            onChange={handleSearch}
            ref={searchRef}
          />
          <fieldset>
            <legend>Search By</legend>
            <div className="section-wrap">
              <input
                type="radio"
                name="searchOption"
                value="name"
                checked={searchOption === "name"}
                onChange={handleRadioChange}
              />
              <label className="radio-label" htmlFor="searchOption">
                name
              </label>
              <input
                type="radio"
                name="searchOption"
                value="ingredient"
                checked={searchOption === "ingredient"}
                onChange={handleRadioChange}
              />
              <label className="radio-label" htmlFor="searchOption">
                ingredient
              </label>
              <input
                type="radio"
                name="searchOption"
                value="letter"
                checked={searchOption === "letter"}
                onChange={handleRadioChange}
              />
              <label className="radio-label" htmlFor="searchOption">
                first letter
              </label>
            </div>
          </fieldset>
        </div>
      </form>
    </section>
  );
};

export default Search;
