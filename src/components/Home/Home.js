import ProductList from "../ProductList/ProductList";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.productListContainer}>
      <ProductList />
    </div>
  );
}

export default Home;