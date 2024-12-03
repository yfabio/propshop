import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ProductProvider } from "./context/product/ProductContext";
import { CartProvider } from "./context/cart/CartContext";

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <>
          <Header />
          <main className="py-3">
            <Container>
              <Outlet />
            </Container>
          </main>
          <Footer />
        </>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
