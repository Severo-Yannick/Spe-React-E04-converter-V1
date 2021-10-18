// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
// == Import scss
import './styles.scss';

const Toggler = ({ buttonClick, active }) => (
  <div>
    <button
      className={active ? 'toggler toggler--active' : 'toggler'}
      type="button"
      onClick={buttonClick}
    >
      =
    </button>
  </div>
);

Toggler.propTypes = {
  buttonClick: PropTypes.func,
  active: PropTypes.bool,
};

// Valeur par défaut une fonction vide
Toggler.defaultProps = {
  buttonClick: () => {},
  active: false,
};

export default Toggler;
