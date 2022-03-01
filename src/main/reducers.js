import { combineReducers } from 'redux';
import { books } from './scenes/application/scenes/scenes/booksFiltered/services/reducers';
const rootReducer = combineReducers({
    books
});

export default rootReducer;
