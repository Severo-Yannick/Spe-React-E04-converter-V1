// == Import : npm
import React from 'react';
// == Import du fichier scss
import './styles.scss';

const Header = () => (
  <header className="header">
    <h1 className="header__title">Converter</h1>
    <p className="header__currency_base">1 euro</p>
  </header>
);

export default Header;
