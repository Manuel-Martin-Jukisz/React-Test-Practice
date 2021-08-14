import { Fragment } from "react";
import PropTypes from 'prop-types'

const PrimeraApp = ({ saludo, suptitulo}) => {
    

  return (
    <>
      <h1>{saludo}</h1>
      <p>{suptitulo}</p>
    </>
  );
};

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;