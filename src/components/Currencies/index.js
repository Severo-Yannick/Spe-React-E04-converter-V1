// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
// == Import : composants
import Currency from './Currency';

// == Import : scss
import './styles.scss';

const Currencies = ({ currencies }) => (
  <main className="currencies">
    <h2 className="currency currencies__title">Currencies</h2>
    <ul className="currencies__list">
      {currencies.map((currency) => (
        <Currency
          key={currency.name}
          {...currency}
        />
      ))}
    </ul>
  </main>
);

Currencies.prototype = {
  // la prop currencies reçoit un tableau
  currencies: PropTypes.arrayOf(
    // Déversement des objets du tableau grace à la méthode map
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ),
};

Currencies.defaultProps = {
  currencies: [],
};

export default Currencies;
