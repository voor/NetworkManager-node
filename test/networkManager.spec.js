import networkManager from '../lib/networkManager';
import { expect } from 'chai';

describe('NetworkManager module', () => {
  describe('"list"', () => {
    it('should export a function', () => {
      expect(networkManager.list).to.be.a('function');
    });
  });
});
