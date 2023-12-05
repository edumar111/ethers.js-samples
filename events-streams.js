const { ethers , JsonRpcProvider} = require("ethers");
const usersContractCompile = require('./scripts/compile');
const ABI = usersContractCompile.abi;

const provider =  new JsonRpcProvider(`http://localhost:8545`)



const address = '0x03B36E1062EE09D2C4A7d4b2fd1Bead2fc73EFe1' // DAI Contract
const contract = new ethers.Contract(address, ABI, provider)

const main = async () => {
    const block = await provider.getBlockNumber()

    const ValueSetedEvents = await contract.queryFilter('ValueSeted', block - 1, block)
    console.log(ValueSetedEvents)
}

main()