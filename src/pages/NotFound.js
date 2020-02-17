import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="section notFound-page">
      <div className="notFound-container">
        <h1>Soooory!!! can't find what you are looking for....</h1>
        <Link to="/" className="btn btn-primary">
          go home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
