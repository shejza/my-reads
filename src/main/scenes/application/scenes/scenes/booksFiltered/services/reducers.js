export function books(state = {}, action) {
  switch (action.type) {
    case 'BOOKS_GETALL':
      return {
        books: action.books,
      };
    case 'BOOKS_GETALL_FAIL':
      return {
        error: action.error,
      };
      case 'BOOKS_UPDATE':
        return {
          books: state.books.map((book) =>
          book.id === action.book.id ? action.book : book
        ),
        };
      case 'BOOKS_UPDATE_FAIL':
        return {
          error: action.error,
        };
    default:
      return state;
  }
}
