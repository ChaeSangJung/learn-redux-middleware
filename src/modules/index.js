import { combineReducers } from 'redux';
import counter from './counter';
import thunkcounter from "./thunkcounter";
import posts from "./posts";

const rootReducer = combineReducers({
    counter,thunkcounter,posts
});

export default rootReducer;