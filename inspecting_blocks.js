const { JsonRpcProvider } = require("ethers");


const provider =  new JsonRpcProvider(`http://localhost:8545`)

const main = async () => {
    //const block = await provider.getBlockNumber()
    const block = 125252

    console.log(`\nBlock Number: ${block}\n`)

    const blockInfo = await provider.getBlock(block)

    console.log(blockInfo)

    const  transactions  = await blockInfo.getTransaction(block)

    console.log(`\nLogging first transaction in block:\n`)
    console.log(transactions)
}

main()