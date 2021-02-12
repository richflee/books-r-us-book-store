import logo from './logo.svg';
import './App.css';
import DogsList from './components/DogsList/DogsList';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Header from './components/Header/Header';

const appStyles = {
  display: 'flex',
  margin: '0 auto'
};

const styles = {
  background: 'red',
  flexGrow: '2'
};

const cartStyles = {
  background: 'blue',
  flexGrow: '1'
};

function App() {
  return (
    <div className="App">
      <Header />
      <div style={appStyles}>
        <div style={styles}>
          <DogsList />
        </div>
        <div style={cartStyles}>
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
}

export default App;
