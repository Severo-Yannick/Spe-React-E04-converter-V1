// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : scss
import './styles.scss';

const Amount = ({ value, name }) => (
  <footer className="amount">
    {
      (value !== null)
        ? (
          <>
            <p className="amount__value">{value}</p>
            <h3 className="amount__currency">{name}</h3>
          </>
        )
        : <h3 className="amount__empty">Veuillez choisir une monnaie</h3>
    }
  </footer>
);

Amount.PropTypes = {
  value: PropTypes.number,
  name: PropTypes.string,
};

Amount.defaultProps = {
  value: null,
  name: null,
};

export default Amount;
