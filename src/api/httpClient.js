import fetch from 'isomorphic-unfetch';

export function httpClient(baseURL) {
  return {
    get: (path, options) => {
      return fetch(
        'https://api.spacexdata.com/v3/launches?limit=100&launch_success=true',
        options
      ).then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        console.log('vishnu', res);
        return res.json();
      });
    },

    post: (path, body, options = {}) => {
      return fetch(baseURL + path, {
        ...options,
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        }
      }).then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }

        return res.json();
      });
    }
  };
}
