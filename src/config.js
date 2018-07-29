const TOKEN_API = 'BQC7eKvsRxumsX_n2ncJBspoxMfGLRmF9TAgTqZoy3WqrJEK1xkdxTyDiO4UegCdKtp9gqSqPsZF_wtiy2OiKyHXGyY4aVC3biU-vdz4eCUculu2XVCSRkp4K8NQ7mi9NlobMQzKz02MVg';

export const API_URL = 'https://api.spotify.com/v1';

export const HEADERS = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${TOKEN_API}`,
  },
};
