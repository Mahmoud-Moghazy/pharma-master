import React from "react";

const ProductItem = ({
  image,
  productName,
  productID,
  pharmacy,
  prices,
  quantities,
}) => {
  // Render the product item based on the provided props
  return (
    <div className="product-item">
      <img src={image} alt={productName} />
      <h3>{productName}</h3>
      <p>Product ID: {productID}</p>
      <p>Pharmacy: {pharmacy}</p>
      <p>Price: {prices}</p>
      <p>Quantity: {quantities}</p>
    </div>
  );
};

export default ProductItem;
