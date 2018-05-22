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
        amount: 100,
        sender: 'XLFKVNFLKNELKTN',
        recipient: 'SLDVNLNLJNTLJENR'
    },
    {
        amount: 100,
        sender: 'XLFKVNFLKNELKTN',
        recipient: 'SLDVNLNLJNTLJENR'
    },
    {
        amount: 1000,
        sender: 'XLFKVNFLKNELKTN',
        recipient: 'SLDVNLNLJNTLJENR'
    }
];
const  nonce = 495245454;
const hash = bitcoin.hashBlock(prevoiusBlockHash, currentBlockData, nonce);

console.log(hash);