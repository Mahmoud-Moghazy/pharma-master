import React, { Fragment, useEffect, useState } from "react";
import { Container, Col, Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CardsDetails.scss";
const CardsDetails = () => {
  // const cardsHomeData = [
  //   { link: "/medicine" },
  //   { link: "/equipments" },
  //   { link: "/cares" },
  //   { link: "/vitamins" },
  //   // Add more card objects as needed
  // ];
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchDataHandler();
  }, []);

  async function fetchDataHandler() {
    try {
      const response = await fetch(
        "http://e-pharmacy.runasp.net/api/Product/Categories"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const categoriesData = await response.json();
      setCategories(categoriesData);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }

  return (
    <Fragment>
      {/* Render category data here */}
      <Container>
        <Row>
          {categories.map((category, index) => (
            <Col lg="3" md="6" key={index} id="cards">
              <Card id="card-main">
                <Card.Body id="card-details">
                  <div>
                    <img src={category.pictureUrl} alt={category.name} />
                    <Link to={category.id}>
                      <Link>
                        <p>{category.name}</p>
                      </Link>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
};

export default CardsDetails;
