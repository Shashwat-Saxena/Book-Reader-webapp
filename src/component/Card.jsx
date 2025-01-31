import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ product }) => {
  const navigate = useNavigate();

  const clickHandle = (image,name,description,price) =>{
    navigate("/read", {
      state: {
        image: product.image,
        name: product.name,
        description: product.description,
        price: product.price,
        path: product.path
      },
    });
  };
  return (
    <>
      <div
        class="col-lg-3 col-md-4 col-sm-6 mb-4"
        style={{
          width: "16rem",
          display: "flex",
          justifyContent: "center",
          gap: "5px",
          flexDirection: "column  ",
          margin: "10px",
          padding: "10px",
          cursor:'pointer'
        }}
        onClick={() => {
          clickHandle(
            product?.image,
            product?.name,
            product?.description,
            product?.price,
            product?.path
          );
        }}
      >
        <img
          src={product?.image}
          class="card-img-top"
          style={{ height: "350px", width: "100%", objectFit: "contain" }}
          alt={product.name}
        />
        <div class="card-body">
          <h5 class="card-title" style={{ fontFamily:'cursive'}}>{product.name}</h5>
          <p class="card-text"  >{product.description}</p>
          <p class="card-price"> ₹{product.price}</p>
          <a href="/read" class="btn btn-dark">
            Read Me
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
