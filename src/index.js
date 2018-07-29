import search from './search';
import album from './album';
import toJSON from './utils';

import { API_URL } from './config';

export default class SpotifyWrapper {
  constructor(options) {
    this.apiURL = options.apiURL || API_URL;
    this.token = options.token;

    this.album = album.bind(this)();
    this.search = search.bind(this)();
  }

  request(url) {
    const headers = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${this.token}`,
      },
    };

    return fetch(url, headers).then(toJSON);
  }
}
