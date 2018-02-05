
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer} from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export default createStore(combineReducers({form: reducer}), composeWithDevTools(), applyMiddleware(thunk));