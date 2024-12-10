import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import CartContext from "../context/cart/CartContext";
import { useNavigate } from "react-router-dom";

const ShippingScreen = () => {
  const { shippingAddress, saveShippingAddress } = useContext(CartContext);

  const [address, setAddress] = useState(shippingAddress?.address || "");
  const [city, setCity] = useState(shippingAddress?.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress?.postalCode || ""
  );
  const [country, setCountry] = useState(shippingAddress?.country || "");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    saveShippingAddress({ address, city, postalCode, country });
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address" className="my-2">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="city" className="my-2">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
          <Form.Group controlId="postalCode" className="my-2">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter postalcode"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="country" className="my-2">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            ></Form.Control>
          </Form.Group>
        </Form.Group>
        <Button type="submit" variant="dark" className="my-2">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
