import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-lightblue">
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="/">Zafiro Diseño</a>
        <div className="ml-auto">
          <button className="btn ">Carteras</button>
          <button className="btn btn">Riñoneras</button>
          <button className="btn btn">Billeteras</button>
          <button className="btn btn">Bolsos</button>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
