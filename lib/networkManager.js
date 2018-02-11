import { exec } from 'child-process-promise';
import csvtojson from 'csvtojson';

class NetworkManager {
  constructor(options) {
    this._options = options;
  }
  list() {
    return new Promise((resolve, reject) => {
      exec('nmcli -t -f SSID,MODE,CHAN,FREQ,RATE,SIGNAL,BARS,SECURITY,ACTIVE,IN-USE device wifi list').then(result => {
        const networks = [];
        const headers = [
          'ssid',
          'mode',
          'channel',
          'frequency',
          'rate',
          'signal',
          'bars',
          'security',
          'active',
          'used',
        ];
        csvtojson({
          delimiter: ':',
          noheader: true,
          headers,
        })
          .fromString(result.stdout)
          .on('csv', csvRow =>
            networks.push(
              csvRow.reduce((row, entry, count) => {
                if (headers[count] === 'active' || headers[count] === 'used') {
                  row[headers[count]] = Boolean(entry);
                } else {
                  row[headers[count]] = entry;
                }
                return row;
              }, {})
            )
          )
          .on('done', () => resolve(networks));
      });
    });
  }
}

export default new NetworkManager();
