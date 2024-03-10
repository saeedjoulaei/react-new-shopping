import { Children, createContext, useEffect, useState } from "react";

const ProductContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await api.get("/products");
      setProducts(response);
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {Children}
    </ProductContext.Provider>
  );
}

export default ProductsProvider;
