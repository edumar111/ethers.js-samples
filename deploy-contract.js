const { ethers , JsonRpcProvider} = require("ethers");
const usersContractCompile = require('./scripts/compile');
const ABI = usersContractCompile.abi;
const BYTECODE = '0x'+usersContractCompile.evm.bytecode.object ;
const PRIVATE_KEY='271017cf1ba652a229390636ce6a6ac0e8870224557dffd72d25956e1e30b9f7'
//console.log(ABI)
//console.log(bytecode)

const deploy = async function () {
    try {
        const provider = new JsonRpcProvider(`http://localhost:8545`)
        const Wallet = new ethers.Wallet(PRIVATE_KEY, provider);
        const ContractInstance = new ethers.ContractFactory(ABI, BYTECODE, Wallet);
        const contract = await ContractInstance.deploy();
        //await contractInstance.deployed();
      
        console.log("Deployed contract address - ", await contract.getAddress());
        
        
    } catch (err) {
        console.log("Error in deploying contract.");
        console.log(err);
    }
};

deploy()