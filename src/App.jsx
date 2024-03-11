import { Navigate, Route, Routes } from "react-router-dom";
import ProductsPages from "./pages/ProductsPages";
import DetailsPage from "./pages/DetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import PageNotFound from "./pages/404";
import ProductsProvider from "./context/ProductContext";

function App() {
  return (
    <ProductsProvider>
      <Routes>
        <Route index path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductsPages />} />
        <Route path="/products/:id" element={<DetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </ProductsProvider>
  );
}

export default App;
