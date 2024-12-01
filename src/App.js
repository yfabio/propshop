import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ProductProvider } from "./context/product/ProductContext";

function App() {
  return (
    <ProductProvider>
      <>
        <Header />
        <main className="py-3">
          <Container>
            <Outlet />
          </Container>
        </main>
        <Footer />
      </>
    </ProductProvider>
  );
}

export default App;
