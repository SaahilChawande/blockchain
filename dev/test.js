const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(1234, 'SFXGFGDHD05', 'SFGLDJGNLKJ67J5J');
bitcoin.createNewBlock(23443, 'SFGFHG45764', 'GHBGFBNCGHG456');
bitcoin.createNewBlock(5476, 'SDGXFGDXFG4767', 'DVGFXGVDRF53645');

console.log(bitcoin);