import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductProvider } from "./context/product/ProductContext";
import { CartProvider } from "./context/cart/CartContext";
import { UserProvider } from "./context/user/UserContext";

function App() {
  return (
    <UserProvider>
      <ProductProvider>
        <CartProvider>
          <>
            <ToastContainer />
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
    </UserProvider>
  );
}

export default App;
