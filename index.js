import networkManager from './lib/networkManager';

networkManager.list().then(networks => console.log(networks));
