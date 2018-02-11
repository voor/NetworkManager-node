import NetworkManager from './lib/networkManager';

const networkManager = new NetworkManager();

networkManager.list().then(networks => console.log(networks));
