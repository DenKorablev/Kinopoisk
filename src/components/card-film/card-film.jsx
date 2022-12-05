import React from 'react';
import PropTypes from "prop-types";

const CardFilm = ({film}) => {
  return <>
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={film.img} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href={film.href}>{film.name}</a>
      </h3>
    </article>
  </>;
};

CardFilm.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  })
};
export default CardFilm;
