import { apiUrl } from 'helpers/api-url';
import { headers } from 'helpers/headers';

export const apiCalls = {
  search
};

function search(query) {
  const requestUrl = `${apiUrl}/search`;

  const requestOptions = {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({query})
  };

  return fetch(requestUrl, requestOptions).then((response) => response.json());
}

