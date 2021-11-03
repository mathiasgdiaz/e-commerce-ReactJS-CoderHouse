import React from 'react';
import './App.css';
import './styles/output.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';

function App() {
  return(
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer title="Objetos Útiles Y Bolucompras"/>
        </Route>
        <Route exact path="/category/:categoryId">
          <ItemListContainer/>
        </Route>
        <Route exact path="/item/:itemId">
          <ItemDetailContainer/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
