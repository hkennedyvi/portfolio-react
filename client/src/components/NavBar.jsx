import React from 'react';
import './style.css';

function NavBar () {
    return (
        <nav className="navbar fixed-bottom navbar-dark navbar-expand-lg">
        <a className="navbar-brand" href="/">Howard Kennedy VI</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="portfolio">Portfolio</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
      </nav>
    )
}

export default NavBar;

