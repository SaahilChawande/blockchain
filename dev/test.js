const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2434, 'SDSFFGNLJN45355', 'DFKDSNSLFDJN8ETG39');

bitcoin.createNewTransaction(100, 'ALEX_VFSKV365K', 'JEN_JRGL3566');

bitcoin.createNewBlock(23434, 'DLVSLWTLKW', 'SDFLKNETN');

bitcoin.createNewTransaction(5453, 'ALEX_VFSKV365K', 'JEN_JRGL3566');
bitcoin.createNewTransaction(3454, 'ALEX_VFSKV365K', 'JEN_JRGL3566');
bitcoin.createNewTransaction(3465, 'ALEX_VFSKV365K', 'JEN_JRGL3566');

bitcoin.createNewBlock(23543465, 'DLVSLWTLKW', 'SDFLKNETN');

console.log(bitcoin.chain[2]);