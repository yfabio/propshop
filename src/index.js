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
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const root = ReactDOM.createRoot(document.getElementById("root"));

const route = (
  <Route path="/" element={<App />}>
    <Route index={true} path="/" element={<HomeScreen />} />
    <Route path="/product/:id" element={<ProductScreen />} />
  </Route>
);

const router = createBrowserRouter(createRoutesFromElements(route));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
