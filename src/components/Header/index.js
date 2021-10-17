// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
// == Import du fichier scss
import './styles.scss';

const Header = ({ baseAmout }) => (
  <header className="header">
    <h1 className="header__title">Converter</h1>
    <p className="header__currency_base">
      {baseAmout} euro{(baseAmout > 1 ? 's' : '')}
    </p>
  </header>
);

Header.propTypes = {
  baseAmout: PropTypes.number,
};

Header.defaultProps = {
  baseAmout: 1,
};
// la fonction devient pure avec "memo" le render sera effectué uniquement
// s'il y a un changement du composant
export default React.memo(Header);
