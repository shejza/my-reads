import { apiCalls } from './api';

export const actions = {
  getAll,
  updateBook
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

function updateBook(book, shelf) {
  return (dispatch) => {
    apiCalls.updateBook(book, shelf).then(() => {
      dispatch(success({...book, shelf}));
    });
  };

  function success(book) {
    return {
      type: 'BOOKS_UPDATE',
      book,
    };
  }
  function failure(error) {
    return {
      type: 'BOOKS_UPDATE_FAIL',
      error,
    };
  }
}
