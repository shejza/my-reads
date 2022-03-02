import { apiCalls } from './api';

export const actions = {
  search
};

function search(query) {
  return (dispatch) => {
    apiCalls.search(query).then((query) => {
      dispatch(success(query));
    });
  };

  function success(query) {
    return {
      type: 'SEARCHBOOKS_GETALL',
      query,
    };
  }
  function failure(error) {
    return {
      type: 'SEARCHBOOKS_GETALL_FAIL',
      error,
    };
  }
}
