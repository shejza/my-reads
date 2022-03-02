import { combineReducers } from 'redux';
import { books } from './scenes/application/scenes/scenes/booksFiltered/services/reducers';
import { searchedBooks } from './scenes/application/scenes/scenes/allbooks/services/reducers';
const rootReducer = combineReducers({
    books, searchedBooks
});

export default rootReducer;
