import React from 'react';
import PropTypes from "prop-types";
import MainPage from '../main/main-page';

const App = ({films}) => {
  return <>
    <MainPage films={films}/>
  </>;
};

App.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      })
  )
};

export default App;
