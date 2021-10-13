// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';
import './styles.scss';

// == Composant
const Converter = () => (
  <div className="converter">
    <Header />
    <Currencies />
    <Amount />
  </div>
);

// == Export
export default Converter;
