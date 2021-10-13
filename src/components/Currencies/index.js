// == Import
import React from 'react';
import Currency from './Currency';

import './styles.scss';

const Currencies = () => (
  <main className="currencies">
    <h2 className="currency currencies__title">Currencies</h2>
    <ul className="currencies__list">
      <Currency />
      <Currency />
      <Currency />
      <Currency />
    </ul>
  </main>
);

export default Currencies;
