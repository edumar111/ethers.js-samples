const { ethers ,JsonRpcProvider} = require("ethers");
const usersContractCompile = require('./scripts/compile');
const ABI = usersContractCompile.abi;

const provider =  new JsonRpcProvider(`http://35.185.112.219`)


const address = '0x1Eb9aCF008233a181e0970ba18191A82a37e150D' // DAI Contract
const contract = new ethers.Contract(address, ABI, provider)

const main = async () => {
    
    const value = await contract.retreive()

    console.log(`Value Returned: ${value}`)
    
}

main()