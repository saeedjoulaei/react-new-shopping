import { useProducts } from "../context/ProductContext";

function ProductsPages() {
  const products = useProducts();
  console.log(products);
  return <div>ProductsPages</div>;
}

export default ProductsPages;
