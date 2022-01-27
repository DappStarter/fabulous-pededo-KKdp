require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remind arrow good clinic bridge gift'; 
let testAccounts = [
"0xad3552b7dd6c4ef32273464c9dafa770a676efae18f23db3af37e9f0669896cc",
"0x3429d36b9c152b0b4eac9d609d0e4edacc802dcb1dc7d20976e520e5622e8940",
"0x7da7df1a28ff0f1eae3ee41ddb485ad30c820ccfe372e61f6dcea9bc84d8831d",
"0xd98fc2bdd71c3195184df41b86408b3049d6cead1e2a3b49feb4abe62fb3b873",
"0x7d3c7360d7fab1c5f2ce07cac85397dfea8a9eb15124a7cd29722aa9e2d9879f",
"0xb4f49f97a2f43fdc50ea3c70c88f097ea1ac131a3056bd13aff7331012312c29",
"0x28f0fd41cda108baded5950a0ffa778ae4efbc0ac4abdb5fec903e4d1d5f73d8",
"0x5f39868461f905d9a59c809e207ceb3ad86d8c0ca3387d22cf482f0f1cb84b36",
"0xc960fa36c8b2e667af1d609481fde78a5c5edb274b43dcf0930ba8423d78df20",
"0x27e2a4ffc00a9c1f6bb7b10fe46e3d1a921bfe3734ce64740b3c4c333da02d1b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

