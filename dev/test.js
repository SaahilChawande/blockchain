const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

const bc1 = {
    "chain": [
    {
        "index": 1,
        "timestamp": 1528046515522,
        "transactions": [],
        "nonce": 100,
        "hash": "0",
        "previousBlockHash": "0"
    },
    {
        "index": 2,
        "timestamp": 1528046578270,
        "transactions": [],
        "nonce": 18140,
        "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
        "previousBlockHash": "0"
    },
    {
        "index": 3,
        "timestamp": 1528047097717,
        "transactions": [
            {
                "amount": 12.5,
                "sender": "00",
                "recipient": "9d15a220675211e899db95e0a8432c93",
                "transactionId": "c3ba5d30675211e899db95e0a8432c93"
            },
            {
                "amount": 300,
                "sender": "SDVJSVDNLJNLEJ6NLE5",
                "recipient": "SLDVFNJLSJNTLJ5N6LE",
                "transactionId": "ecbc25a0675311e899db95e0a8432c93"
            },
            {
                "amount": 400,
                "sender": "SDVJSVDNLJNLEJ6NLE5",
                "recipient": "SLDVFNJLSJNTLJ5N6LE",
                "transactionId": "f0fe1510675311e899db95e0a8432c93"
            },
            {
                "amount": 500,
                "sender": "SDVJSVDNLJNLEJ6NLE5",
                "recipient": "SLDVFNJLSJNTLJ5N6LE",
                "transactionId": "f3bdd150675311e899db95e0a8432c93"
            }
        ],
        "nonce": 54111,
        "hash": "00003848296eb75a724239360d1385c5f63be96dc2e61b79f27c2b8d15857916",
        "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
    },
    {
        "index": 4,
        "timestamp": 1528047149804,
        "transactions": [
            {
                "amount": 12.5,
                "sender": "00",
                "recipient": "9d15a220675211e899db95e0a8432c93",
                "transactionId": "f81a74b0675311e899db95e0a8432c93"
            },
            {
                "amount": 600,
                "sender": "SDVJSVDNLJNLEJ6NLE5",
                "recipient": "SLDVFNJLSJNTLJ5N6LE",
                "transactionId": "04453b80675411e899db95e0a8432c93"
            },
            {
                "amount": 700,
                "sender": "SDVJSVDNLJNLEJ6NLE5",
                "recipient": "SLDVFNJLSJNTLJ5N6LE",
                "transactionId": "07ad45b0675411e899db95e0a8432c93"
            },
            {
                "amount": 800,
                "sender": "SDVJSVDNLJNLEJ6NLE5",
                "recipient": "SLDVFNJLSJNTLJ5N6LE",
                "transactionId": "0e043270675411e899db95e0a8432c93"
            },
            {
                "amount": 900,
                "sender": "SDVJSVDNLJNLEJ6NLE5",
                "recipient": "SLDVFNJLSJNTLJ5N6LE",
                "transactionId": "122b46e0675411e899db95e0a8432c93"
            }
        ],
        "nonce": 9395,
        "hash": "000086b9c4c65dc1ce798c3fb6e293ab97404134abbe4de2fa184099081cb0ac",
        "previousBlockHash": "00003848296eb75a724239360d1385c5f63be96dc2e61b79f27c2b8d15857916"
    },
    {
        "index": 5,
        "timestamp": 1528047174613,
        "transactions": [
            {
                "amount": 12.5,
                "sender": "00",
                "recipient": "9d15a220675211e899db95e0a8432c93",
                "transactionId": "1725b0e0675411e899db95e0a8432c93"
            }
        ],
        "nonce": 45807,
        "hash": "000078a716a42e1f883c21d64dbe6cb0baa255e9dfd4530c770e9a3cf77ee31f",
        "previousBlockHash": "000086b9c4c65dc1ce798c3fb6e293ab97404134abbe4de2fa184099081cb0ac"
    },
    {
        "index": 6,
        "timestamp": 1528047176371,
        "transactions": [
            {
                "amount": 12.5,
                "sender": "00",
                "recipient": "9d15a220675211e899db95e0a8432c93",
                "transactionId": "25ef3e70675411e899db95e0a8432c93"
            }
        ],
        "nonce": 47660,
        "hash": "0000b599895dac5d2ab7a6af21c33dc43d03a973d415fe8268a51de36618d621",
        "previousBlockHash": "000078a716a42e1f883c21d64dbe6cb0baa255e9dfd4530c770e9a3cf77ee31f"
    }
],
    "pendingTransactions": [
    {
        "amount": 12.5,
        "sender": "00",
        "recipient": "9d15a220675211e899db95e0a8432c93",
        "transactionId": "26fb5740675411e899db95e0a8432c93"
    }
],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
};

console.log('VALID: ', bitcoin.chainIsValid(bc1.chain));