import React from 'react';
import { Route, Link } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';
import { Home } from './Home';
import { Subpage } from './Subpage';
import './App.css';

export const App = props => (
  <div className="App">
    <div className="TopBar">
      <Link to="/">Home</Link>
      <Link to="/subpage">Subpage</Link>
    </div>

    <Route exact path="/" children={homeRoute} />
    <Route exact path="/subpage" children={subRoute} />
  </div>
);

const homeRoute = ({ match, ...rest }) => {
  global.console.log('home route match', match !== null);
  return (
    <TransitionGroup component={firstChild} appear={true} enter={true} exit={true}>
      { match && <Home {...rest} /> }
    </TransitionGroup>
  );
};

const subRoute = ({ match, ...rest }) => {
  global.console.log('sub route match', match !== null);
  return (
    <TransitionGroup component={firstChild} appear={true} enter={true} exit={true}>
      { match && <Subpage {...rest} /> }
    </TransitionGroup>
  )
};

const firstChild = props => (
  React.Children.toArray(props.children)[0] || null
);
