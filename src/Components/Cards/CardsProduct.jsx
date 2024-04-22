import React from "react";

const CardsProduct = (props) => {
  return (
    <div className="box">
      <img src={props.image} alt="" />
      <h2>{props.productName}</h2>
      <p>{props.productID}</p>
      <p> {props.pharmacy}</p>
      <span>{props.price}</span>
      <span>{props.quantities}</span>
    </div>
  );
};

export default CardsProduct;
