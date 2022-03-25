import logo from './logo.svg';
import './App.css';
import Header from './Components/Layout/header';
import { Fragment } from 'react';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <Fragment>
      <Cart/>
      <Header/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
