import React from 'react';
import Currency from './Currency';

const Currencies = () => (
  <main className="converter__currencies">
    <ul className="currencies">
      <li className="currency currencies__title">Currencies</li>
      <Currency />
      <Currency />
      <Currency />
      <Currency />
    </ul>
  </main>
);

export default Currencies;
