// == Import npm
import React from 'react';
// == Import : composants
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';
// == Import : data
import currenciesData from 'src/data/currencies';
// == Import : scss
import './styles.scss';

// == Composant
const Converter = () => (
  <div className="converter">
    <Header />
    <Currencies
      currencies={currenciesData}
    />
    <Amount
      name="United state Dollar"
      value="1.09"
    />
  </div>
);

// == Export
export default Converter;
