import React from 'react';
import './App.css';
import './styles/output.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import Checkout from './components/Cart/Checkout.jsx';
import { CartFuncion } from './context/CartContext'
import { Categories } from "./context/CategoriesContext.jsx"
import Cart from './components/Cart/Cart.jsx';

function App() {
  const [cartOpen, setCartOpen] = React.useState(false);
  return(
    <BrowserRouter>
      <Categories>
        <CartFuncion>
          <NavBar setCartOpen={setCartOpen}/>
          <Switch>
            <Route exact path="/">
              <ItemListContainer title="Objetos Útiles Y Bolucompras"/>
            </Route>
            <Route exact path="/category/:categoryKey">
              <ItemListContainer/>
            </Route>
            <Route exact path="/item/:itemId">
              <ItemDetailContainer setCartOpen={setCartOpen}/>
            </Route>
            <Route exact path="/checkout">
              <Checkout/>
            </Route>            
          </Switch>
          <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
        </CartFuncion>
      </Categories>
    </BrowserRouter>
  );
}

export default App;
