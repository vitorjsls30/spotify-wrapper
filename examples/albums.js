import SpotifyWrapper from '../src/index';

global.fetch = require('node-fetch');

const spotify = new SpotifyWrapper({
  token: 'BQDOz88ZQBLnH2RTGwEgafKj1MtLHEMcJcpP54lfKCM30FQeWrM5w48vgnnngMiXUo3sliNPqBiiF_tf8iBh0Rcj61ANDTfBHC-hvpJ-dV_l19cAnfJENXfs3N7QDfgoH11yCDXfCkyBoQ',
});

const albums = spotify.search.albums('Incubus');

albums.then(data => data.albums.items.map(item => console.log(item.name)));
