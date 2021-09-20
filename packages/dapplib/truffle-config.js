require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drop tail solution mansion creek stick mad heavy arena opera stable'; 
let testAccounts = [
"0xbd70ba9e2cde693fb18a2102340ecde12ca29efafe145dcd70e0e9099e5e8c13",
"0x175137e086d1613fd856dfa0af20169ddd46e961bb4a148daea826fc81c6e4b2",
"0xb1039373aa11098d375e27f958318529294a4a32fce006e783ab8285ac1da812",
"0xcda89a3becec2bf8eb9e527aebe9b3e81ada5080eb748b98381bd57c12fd4f7d",
"0xa49b2977d7fe0f16cf662576c938d0b42c5b1e8fda4d60e9957da1f75311bfb1",
"0x9ba60a2c483b799259656f69d324cb2eb33bcc6efbe99a58e452a3cbbbf62c6a",
"0xbbf5d63462ab861ae0aba49bac6731f3ab96f6ee7971b01b456b26b493081e2b",
"0x7e3b2a00dd50677a50bfdf5d548f2ca9511da479742a8a28ac62e4557ca37d45",
"0x8af514a1acf9449890483f527607d6b7b7171090fe954fff324e7fca26b132de",
"0xac8fce11154b1a64d889c272259cf17f8a64596025afdf368b3f648986f2a386"
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

