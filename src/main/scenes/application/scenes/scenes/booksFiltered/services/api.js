import { apiUrl } from 'helpers/api-url';
import { headers } from 'helpers/headers';

export const apiCalls = {
  getBooks,
  updateBook
};

function getBooks() {
  const requestUrl = `${apiUrl}/books`;
  const requestOptions = {
    method: 'GET',
    headers: headers(),
  };

  return fetch(requestUrl, requestOptions).then((response) => response.json());
}

function updateBook(book, shelf) {
  const requestUrl = `${apiUrl}/books/${book.id}`;
  const shelfUpdate = JSON.stringify({
    shelf
  })
  const requestOptions = {
    method: 'PUT',
    headers: headers(),
    body: shelfUpdate
  };

  return fetch(requestUrl, requestOptions).then((response) => response.json());
}


