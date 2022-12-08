const tiket = require('./database/data/tiket');

const parseTiket = [];
// eslint-disable-next-line no-plusplus
for (let i = 1; i < 5; i++) {
  parseTiket.push(JSON.parse(tiket[i]));
}
console.log(tiket);
