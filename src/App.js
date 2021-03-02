import styles from './App.module.css';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import FavouriteBooksList from './components/FavouriteBooks/FavouriteBooksList';

function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.appContainer}>
        <div className={styles.productListContainer}>
          <ProductList />
        </div>
        <div className={styles.cartContainer}>
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
}

export default App;
