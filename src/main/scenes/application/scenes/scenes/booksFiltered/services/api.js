import { apiUrl } from 'helpers/api-url';
import { headers } from 'helpers/headers';

export const apiCalls = {
  getBooks,
};

function getBooks() {
  const requestUrl = `${apiUrl}/books`;
  const requestOptions = {
    method: 'GET',
    headers: headers(),
  };

  return fetch(requestUrl, requestOptions).then((response) => response.json());
}
