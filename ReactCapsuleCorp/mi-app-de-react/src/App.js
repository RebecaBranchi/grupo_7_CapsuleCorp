import React from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './components/products';
import Users from './components/users';
import Categories from './components/categories';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Últimos usuarios creado: <Users/></p>
        <p>Categorías: <Categories/></p>
        <p>Productos: <Products/></p>

      </header>
    </div>
  );
}

export default App;
