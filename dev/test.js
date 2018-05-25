const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

const prevoiusBlockHash = 'LXVNLFGNLKMNEL5N6';
const currentBlockData = [
    {
        amount: 10,
        sender: 'XLFKVNFLKNELKTN',
        recipient: 'SLDVNLNLJNTLJENR'
    },
    {
        amount: 31,
        sender: 'XLFKVNFLKNELKTN',
        recipient: 'SLDVNLNLJNTLJENR'
    },
    {
        amount: 56,
        sender: 'XLFKVNFLKNELKTNM',
        recipient: 'SLDVNLNLJNTLJENR'
    }
];

// console.log(bitcoin.proofOfWork(prevoiusBlockHash, currentBlockData));
console.log(bitcoin.hashBlock(prevoiusBlockHash, currentBlockData, 33979));