/* global fetch */

import { API_URL, HEADERS } from './config';
import toJSON from './utils';

export const getAlbum = id => fetch(`${API_URL}/albums/${id}`, HEADERS).then(toJSON);

export const getAlbums = ids => fetch(`${API_URL}/albums?ids=${ids}&market=ES`, HEADERS).then(toJSON);

export const getAlbumTracks = id => fetch(`${API_URL}/albums/${id}/tracks?market=ES&limit=10&offset=5`, HEADERS).then(toJSON);
