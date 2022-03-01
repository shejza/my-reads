import { apiCalls } from './api';

export const actions = {
  getAll,
};

function getAll() {
  return (dispatch) => {
    apiCalls.getBooks().then(
      (books) => {
        dispatch(success(books.books));
      },
      (error) => {
        dispatch(failure(error));
      }
    );
  };

  function success(books) {
    return {
      type: 'BOOKS_GETALL',
      books,
    };
  }
  function failure(error) {
    return {
      type: 'BOOKS_GETALL_FAIL',
      error,
    };
  }
}
