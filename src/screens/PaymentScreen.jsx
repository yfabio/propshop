import { useState, useContext, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

import CartContext from "../context/cart/CartContext";
import CheckoutSteps from "../components/CheckoutSteps";
import { useNavigate } from "react-router-dom";

const PaymentScreen = () => {
  const { shippingAddress, savePaymentMethod } = useContext(CartContext);

  const [payment, setPayment] = useState("PayPal");

  const navigate = useNavigate();

  useEffect(() => {
    if (!shippingAddress) {
      navigate("/shipping");
    }
  }, [shippingAddress, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    savePaymentMethod(payment);
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as={"legend"}>Select Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              className="my-2"
              label="PayPal or Credit Card"
              id="PayPal"
              name="paymentMethod"
              value="PayPal"
              onChange={(e) => setPayment(e.target.value)}
              checked
            ></Form.Check>
          </Col>
        </Form.Group>
        <Button type="submit" variant="dark">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
