import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from "./screens/HomeScreen";
import logo from './assets/logo.svg'
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a href="/">
              <img className="logo" src={logo} alt="logo" />
            </a>
          </div>
          <div>
            <a href="/cart">Panier</a>
            <a href="/signin">S'inscrire</a>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/cart/:id" element={<CartScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} exact />
          </Routes>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
