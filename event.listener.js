const { ethers , JsonRpcProvider} = require("ethers");
const usersContractCompile = require('./scripts/compile');
const ABI = usersContractCompile.abi;

async function main() {
  const address = "0x03B36E1062EE09D2C4A7d4b2fd1Bead2fc73EFe1";
  const provider =  new JsonRpcProvider(`http://localhost:8545`)
  const contract = new ethers.Contract(address, ABI, provider);
  contract.on("ValueSeted", (from,  value,event) => {
    let info = {
        from: from,
        value: ethers.utils.formatUnits(value, 6),
        data: event,
      };
    console.log(JSON.stringify(info, null, 4));
  });
}
main();
