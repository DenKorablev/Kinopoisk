import React from 'react';
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPageScreen from '../main-screen/main-page-screen';
import AuthScreen from '../auth-screen/auth-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import MovieScreen from '../movie-screen/movie-screen';
import AddReviewScreen from '../add-review-screen/add-review-screen';
import PlayerScreen from '../player-screen/player-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

const App = ({films}) => {
  return <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPageScreen films={films} />
        </Route>
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <Route exact path="/mylist">
          <MyListScreen />
        </Route>
        <Route exact path="/films/:id">
          <MovieScreen />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReviewScreen />
        </Route>
        <Route exact path="/player/:id">
          <PlayerScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
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
