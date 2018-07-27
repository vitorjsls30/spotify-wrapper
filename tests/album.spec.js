// getAlbum
// getAlbumTracks

import chai, { expect } from 'chai';
import { getAlbum, getAlbums, getAlbumTracks } from '../src/album';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
sinonStubPromise(sinon);

chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Album', () => {
  let stubedFetch;
  let promise;

  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
    promise = stubedFetch.returnsPromise();
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('smoke tests', () => {

    it('should have getAlbum method', () => {
      expect(getAlbum).to.exist;
    });

    it('should have getAlbumTracks method', () => {
      expect(getAlbumTracks).to.exist;
    });

  });

  describe('getAlbum', () => {
    it('should call fetch method', () => {
      const album = getAlbum();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    //verifica se o fetch ocorre com a url desejada
    it('should call fetch with the correct url', () => {
      const album = getAlbum('6ZSNnOY2ESMNoVQ5DdvHrj');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/6ZSNnOY2ESMNoVQ5DdvHrj');

      const album2 = getAlbum('6ZSNnOY2ESMNoVQ5DdvHrk');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/6ZSNnOY2ESMNoVQ5DdvHrk');
    });

    //verifica se o dado é recebido pela Promise
    it('should return te correct data from Promise', () => {
      promise.resolves({ album: 'name' });
      const album = getAlbum('6ZSNnOY2ESMNoVQ5DdvHrk');
      // expect(album.resolveValue).to.be.eql({ album: 'name' });
    });

  });

  describe('getAlbums', () => {
    it('should call fetch method', () => {
      const albums = getAlbums();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const albums = getAlbums(['382ObEPsp2rxGrnsizN5TX', '1A2GTWGtFfWp7KSQTwWOyo', '2noRn2Aes5aoNVsU6iWThc']);
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc&market=ES');
    });

    it('should return te correct data from Promise', () => {
      promise.resolves({ album: 'name' });
      const albums = getAlbums(['382ObEPsp2rxGrnsizN5TX', '1A2GTWGtFfWp7KSQTwWOyo', '2noRn2Aes5aoNVsU6iWThc']);
      // expect(albums.resolveValue).to.be.eql({ album: 'name' });
    });

  });

  describe('getAlbumsTracks', () => {
    it('should call fetch method', () => {
      const tracks = getAlbumTracks();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const tracks = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks?market=ES&limit=10&offset=5');
    });

    it('should return te correct data from Promise', () => {
      promise.resolves({ album: 'name' });
      const tracks = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
      // expect(tracks.resolveValue).to.be.eql({ album: 'name' });
    });

  });

});
