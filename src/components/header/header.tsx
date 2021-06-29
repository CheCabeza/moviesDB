import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImFilm, ImTv } from 'react-icons/im';
import './Header.scss';

export default function Header() {
  const [movieIconColor, setMovieIconColor] = useState('movieIcon');
  const [tvIconColor, setTvIconColor] = useState('tvIcon');
  return (
    <>
      <header className="header">
        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="TMDB logo" className="header__logo" />
      </header>
      <div>
        <Link to="/">
          <ImFilm size="3em" className={movieIconColor} onClick={() => { setMovieIconColor('movieIconSelected'); setTvIconColor('tvIcon'); }} />
        </Link>
        <Link to="/tvshows">
          <ImTv size="3em" className={tvIconColor} onClick={() => { setTvIconColor('tvIconSelected'); setMovieIconColor('movieIcon'); }} />
        </Link>
      </div>
    </>
  );
}
