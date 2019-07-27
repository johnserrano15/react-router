import React, { Fragment } from 'react';
import { render } from 'react-dom';
import Home from '../pages/components/home';
import Videos from '../pages/containers/Videos';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/index';
import { Map as map } from 'immutable';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../pages/components/Header'

const logger_ = ({getState, dispatch }) => next => action => {
  console.log('este es mi viejo estado', getState().toJS())
  console.log('vamos a enviar está acción', action);
  const value = next(action)
  console.log('este es mi nuevo estado', getState().toJS())
  return value
}

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk
    )
  )
);


const homeContainer = document.getElementById('home-container')


render(
  <Router>
    <Provider store={store}>
      <Fragment>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path='/videos' component={Videos}/>
      </Fragment>
    </Provider>
  </Router>
, homeContainer);
