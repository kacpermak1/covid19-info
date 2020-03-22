import { combineReducers } from 'redux';
import deathsReducer from './deathsReducer';
import confirmedReducer from './confirmedReducer';


const reducers = combineReducers({deathsReducer, confirmedReducer})

export default reducers;