import logo from './logo.svg';
import './App.css';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';

const appStyles = {
  padding: '1em',
  display: 'flex',
  margin: '0 auto'
};

const styles = {
  flexGrow: '2'
};

const cartStyles = {
  flexGrow: '1'
};

function App() {
  return (
    <div className="App">
      <Header />
      <div style={appStyles}>
        <div style={styles}>
          <ProductList />
        </div>
        <div style={cartStyles}>
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
}

export default App;
