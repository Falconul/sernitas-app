import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/Sernitas.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

    
    
        <nav>
          <ul>
            <li><Link to="/">Ana Sayfa</Link></li>
            <li><Link to="/why-us">Neden Biz</Link></li>
            <li><Link to="/JobOpportunities">İş İlanları</Link></li>
            <li><Link to="/idea">Fikirlerim</Link></li>
         
          </ul>
        </nav>
      </div>
    </header>
  );
}
