const { ethers , JsonRpcProvider} = require("ethers");
const usersContractCompile = require('./scripts/compile');
const ABI = usersContractCompile.abi;
const PRIVATE_KEY='271017cf1ba652a229390636ce6a6ac0e8870224557dffd72d25956e1e30b9f7'

const sendTx = async function () {

    try{
        const provider = new JsonRpcProvider(`http://localhost:8545`)
        const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
        let contractAddress = "0x03B36E1062EE09D2C4A7d4b2fd1Bead2fc73EFe1";
        let contract = new ethers.Contract(contractAddress, ABI, provider);
        let contractWithSigner = contract.connect(wallet);
        const valueRam= Math.floor(Math.random() * 10) + 1;
        console.log("value", valueRam)
        let tx = await contractWithSigner.store (valueRam);

        console.log(tx);
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
//0x37cc6b5f94bf0ce35885c82937710f0d7df348a4033078d960209a11fdc16a3f
// curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params":["0x37cc6b5f94bf0ce35885c82937710f0d7df348a4033078d960209a11fdc16a3f"],"id":53}' http://127.0.0.1:8545