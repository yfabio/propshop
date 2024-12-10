import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import PrivateRoute from "./components/PrivateRoute";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";

const root = ReactDOM.createRoot(document.getElementById("root"));

const route = (
  <Route path="/" element={<App />}>
    <Route index={true} path="/" element={<HomeScreen />} />
    <Route path="/product/:id" element={<ProductScreen />} />
    <Route path="/cart" element={<CartScreen />} />
    <Route path="/login" element={<LoginScreen />} />
    <Route path="/register" element={<RegisterScreen />} />

    <Route path="" element={<PrivateRoute />}>
      <Route path="/shipping" element={<ShippingScreen />} />
      <Route path="/payment" element={<PaymentScreen />} />
    </Route>
  </Route>
);

const router = createBrowserRouter(createRoutesFromElements(route));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
