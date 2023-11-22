const path = require('path');
const fs   = require('fs');
const solc = require('solc');


const storagePath = path.resolve(__dirname, '../contracts',"Storage.sol");

const storageSource = fs.readFileSync(storagePath,'utf8');


var input = {
    language: 'Solidity',
    sources: {
        'Storage.sol' : {
            content: storageSource
        }

    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
};

const contractCompiled = JSON.parse(solc.compile(JSON.stringify(input)));
//console.log("contractCompiled===================")
//console.log(contractCompiled)
const storage =contractCompiled.contracts["Storage.sol"].Storage;
//console.log("storage===================")
//console.log(storage.evm.bytecode.object)
//console.log(chalk.green(storage.evm.bytecode.object));
//console.log(chalk.cyan(JSON.stringify(storage.abi)));
module.exports = contractCompiled.contracts["Storage.sol"].Storage;


