const NetworkManager = require('./network-manager');
const expect = require('chai').expect;

describe('NetworkManager module', () => {
  describe('"up"', () => {
    it('should export a function', () => {
      expect(NetworkManager.up).to.be.a('function');
    });
  });
});
