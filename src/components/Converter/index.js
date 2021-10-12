// == Import npm
import React from 'react';

// == Import
import './styles.scss';

// == Composant
const Converter = () => (
  <div className="converter">
    <header>
      <h1>Converter</h1>
      <p>1 euro</p>
    </header>
    <main className="converter__currencies">
      <ul className="currencies">
        <li className="currency currencies__title">Currencies</li>
        <li>Canadian Dollar</li>
        <li>Swiss Franc</li>
      </ul>
    </main>
    <footer className="converter__footer">
      <p>1.09</p>
      <h2>United States Dollar</h2>
    </footer>
  </div>
);

// == Export
export default Converter;
