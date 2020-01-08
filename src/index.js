/* eslint-disable import/default */
import React from 'react';
import {render} from 'react-dom';
import { Router, browserHistory } from 'react-router';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import routes from './routes';
import appReducer from './reducer';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './styles.scss';
import 'font-awesome/css/font-awesome.css';
import 'flexboxgrid/css/flexboxgrid.css';

injectTapEventPlugin();

const store = createStore(appReducer, {}, applyMiddleware(ReduxThunk));

    render(
        <Provider store={store}>
        <Router routes={routes} history={browserHistory} /> 
        </Provider>,
        document.getElementById('app')
);
