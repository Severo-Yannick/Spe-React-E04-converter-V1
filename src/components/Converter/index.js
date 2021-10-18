// == Import npm
import React, { Component } from 'react';
// == Import : composants
import Header from 'src/components/Header';
import Toggler from 'src/components/Toggler';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';
// == Import : data
import currenciesData from 'src/data/currencies';
// == Import : scss
import './styles.scss';

// == Class
class Converter extends Component {
  // Eslint impose la création d'un constructor
  constructor(props) {
    // super représente le constructeur du parent il attend un paramètre "props"
    super(props);
    // ESLint impose la déclaration d'un objet state en tant que variable de classe
    // il doit obligatoirement s'appeler "this.state"
    // il est obligatoirement un objet
    this.state = {
      open: false,
    };
  }

  render() {
    // destructuring de la clé "open" et création d'une const open
    const { open } = this.state;
    return (
      <div className="converter">
        <Header />
        {
          open && (
            <Currencies
              currencies={currenciesData}
            />
          )
        }
        <Toggler
          active={open}
          buttonClick={() => {
            this.setState({
              open: !open,
            });
          }}
        />
        <Amount
          name="United State Dollar"
          value={1.09}
        />
      </div>
    );
  }
}

// == Export
export default Converter;
