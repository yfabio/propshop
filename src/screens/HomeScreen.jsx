import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product.jsx";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios("/api/products");
      setProducts(data);
    };
    getProducts();
  }, []);

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
