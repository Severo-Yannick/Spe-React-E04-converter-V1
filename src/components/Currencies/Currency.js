// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

const Currency = ({ name }) => (
  <li className="currency">{ name }</li>
);

Currency.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Currency;
