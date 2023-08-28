import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-lightblue">
      <Link to="/">
        <h3>Eccomerce</h3>
      </Link>
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="/">Zafiro Diseño</a>
        <div className="ml-auto">
          <NavLink to={"/category/Carteras"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Carteras</NavLink>
          <NavLink to={"/category/Bolsos"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>bolsos</NavLink>
          <NavLink to={"/category/Riñoneras"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Riñoneras</NavLink>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
