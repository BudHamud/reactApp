import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar2'
import Cart from './components/CartWidget';
import carrie from './107831.png'
import Item from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Item />
      <Cart/><img src={carrie} className="carrie" alt="carrito"/>

      <div className='header'>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#shop">Shop</a>
      </div>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
