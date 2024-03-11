import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductContext";

import styles from "../pages/ProductsPages.module.css";

function ProductsPages() {
  const products = useProducts();

  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <Loader />}
        {products.map((p) => (
          <Card key={p.id} data={p} />
        ))}
        <Loader />
      </div>
      <div>sidebar</div>
    </div>
  );
}

export default ProductsPages;
