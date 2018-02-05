
import {createStore, applyMiddleware} from 'redux';
import {reducer} from 'redux-form';
import thunk from 'redux-thunk';

export default createStore(reducer, applyMiddleware(thunk));