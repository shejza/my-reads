export function searchedBooks(state = {}, action) {
  switch (action.type) {
    case 'SEARCHBOOKS_GETALL':
      return {
        searchedBooks: action.query && !action.query.books.error ? action.query : [],
      };
    case 'SEARCHBOOKS_GETALL_FAIL':
      return {
        error: action.error,
      };
    default:
      return state;
  }
}
