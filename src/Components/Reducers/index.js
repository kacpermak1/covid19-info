import { combineReducers } from 'redux';
import deathsReducer from './deathsReducer';
import confirmedReducer from './confirmedReducer';
import countriesReducer from './countriesReducer';


const reducers = combineReducers({deathsReducer, confirmedReducer, countriesReducer})

export default reducers;