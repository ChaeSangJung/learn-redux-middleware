import { combineReducers } from 'redux';
import counter from './counter';
import thunkcounter from "./thunkcounter"


const rootReducer = combineReducers({
    counter,thunkcounter
});

export default rootReducer;