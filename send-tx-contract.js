const { ethers , JsonRpcProvider} = require("ethers");
const usersContractCompile = require('./scripts/compile');
const ABI = usersContractCompile.abi;
const BYTECODE = '0x'+usersContractCompile.evm.bytecode.object ;
const PRIVATE_KEY='271017cf1ba652a229390636ce6a6ac0e8870224557dffd72d25956e1e30b9f7'

const sendTx = async function () {

    try{
        const provider = new JsonRpcProvider(`http://localhost:8545`)
        const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
        let contractAddress = "0xFF627ce4B68f6bdcEE5bBBA9B87E6B5c22674864";
        let contract = new ethers.Contract(contractAddress, ABI, provider);
        let contractWithSigner = contract.connect(wallet);
        const valueRam= Math.floor(Math.random() * 10) + 1;
        console.log("value", valueRam)
        let tx = await contractWithSigner.store (valueRam);

        console.log(tx.hash);
        // The operation is NOT complete yet; we must wait until it is mined
        await tx.wait();

        // Call the Contract's retreive() method again
        let newValue = await contract.retreive();

        console.log("contract value",newValue);
        
          
    } catch (err) {
        console.log("Error in send Tx to contract.");
        console.log(err);
    }
}

sendTx()