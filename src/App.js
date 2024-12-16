import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductProvider } from "./context/product/ProductContext";
import { CartProvider } from "./context/cart/CartContext";
import { UserProvider } from "./context/user/UserContext";
import { OrderProvider } from "./context/order/OrderContext";

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <OrderProvider>
          <ProductProvider>
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
          </ProductProvider>
        </OrderProvider>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
