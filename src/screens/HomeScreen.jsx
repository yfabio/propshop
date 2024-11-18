import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../assets/products.js";
import Product from "../components/Product.jsx";

const HomeScreen = () => {
  return (
    <>
      <h1>Lastes Producs</h1>
      <Row>
        {products.map((product) => (
          <Col sm="12" md="6" lg="4" xl="3">
            <Product product={product} key={product._id} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
