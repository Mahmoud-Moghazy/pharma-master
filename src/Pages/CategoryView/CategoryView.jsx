import React, { useEffect, useState } from "react";
import Search from "../../Components/Search/Search";
import { Fragment } from "react";
import { Row } from "react-bootstrap";
import "../../css/Cares.css";
import axios from "axios";


const CategoryView = ({ categoryId, categoryName, ViewComponent }) => {



  useEffect(() => {
    fetchDataHandler()
  }, []);

  const [products, setProducts] = useState([]);

  async function fetchDataHandler() {
    const response = await fetch(`http://e-pharmacy.runasp.net/api/product?CategoryId=${categoryId}`);
    const Product = await response.json();
    console.log(Product);
    const ProductData = Product.data.map((item) => {
      return {
        idProduct: item.id,
        nameProduct: item.name,
        imgProduct: item.pictureUrl,
        pharmaciesType: item.pharmacies,
        priceProduct: item.price,
        quantityProduct: item.quantity,
      };
    });
    setProducts(ProductData);
    console.log(ProductData);
  }

  return (
    <Fragment>
      <Search id="custom-search" />
      <div className="container">
        <Row id="Cares">
          <h2>{categoryName}</h2>
        </Row>
      </div>
      <ViewComponent myProduct={products} />
    </Fragment>
  );
};

export default CategoryView;
