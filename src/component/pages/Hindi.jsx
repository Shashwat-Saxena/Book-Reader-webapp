import React from "react";
import content from "../HindiData";
import Card from "../Card";
import { useNavigate } from "react-router-dom";
import Other from "../Other";

const Hindi = ({ searchquery = "" }) => {
  const filteredBooks = content.filter(
    (book) =>
      (book.name && book.name.toLowerCase().includes(searchquery.toLowerCase())) ||
      (book.description && book.description.toLowerCase().includes(searchquery.toLowerCase()))
  );

  const navigate = useNavigate();

  const openBook = (book) => {
    navigate("/reader", { state: { book } });
  };

  return (
    <>
      <h1 style={{ margin: "10px", marginLeft: "28rem", fontFamily: "cursive" }}> ✴ Hindi Books ✴ </h1>
      <div className="container">
        <div className="row">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((product, index) => (
              <Card product={product} key={index}/>
              // <div key={index} onClick={() => openBook(product)}>
              //   <Card product={product} />
              // </div>
            ))
          ) : (
            <p>No books found for "{searchquery}"</p>
          )}
        </div>
        <Other/>
      </div>
    </>
  );
};

export default Hindi;
