import styles from './App.module.css';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Header from './components/Header/Header';
import { isCartSidebarVisible } from './components/ShoppingCart/reactiveVars';
import { useQuery } from '@apollo/client';
import { GET_IS_SHOPPING_CART_SIDEBAR_VISIBLE } from './graphql/queries/get_is_shopping_cart_sidebar_visible';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {

  const { error, data } = useQuery(GET_IS_SHOPPING_CART_SIDEBAR_VISIBLE);

  return (
    <div className={styles.globalContainer}>
      <div className="App">
        <Header />
        <div className={styles.appContainer}>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/product' component={ProductDetails} />
          </Switch>
        </div>
      </div>
      <div hidden={!data.isShoppingCartSidebarVisible} className={styles.cartContainer}>
        <ShoppingCart />
      </div>
    </div>
  );
}

export default App;
