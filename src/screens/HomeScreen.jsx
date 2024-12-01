import { useContext, useEffect } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import Product from "../components/Product.jsx";
import Message from "../components/Message.jsx";
import ProductContext from "../context/product/ProductContext";

const HomeScreen = () => {
  const { products, error, isLoading, getProducts } =
    useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <h1>Lastes Producs</h1>
          <Row>
            {products &&
              products.map((product) => (
                <Col sm="12" md="6" lg="4" xl="3" key={product.id}>
                  <Product product={product} />
                </Col>
              ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;
