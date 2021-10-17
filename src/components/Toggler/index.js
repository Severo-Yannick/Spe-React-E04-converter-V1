// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

const Toggler = ({ buttonClick }) => (
  <div>
    <button
      className="toogler"
      type="button"
      onClick={buttonClick}
    >
      =
    </button>
  </div>
);

Toggler.propTypes = {
  buttonClick: PropTypes.func,
};

// Valeur par défaut une fonction vide
Toggler.defaultProps = {
  buttonClick: () => {},
};

export default Toggler;
