const { Conflux } = require('js-conflux-sdk');
const fs = require('fs');
const PRIVATE_KEY = '0x9E0C5AC2F0B560FD9792D02BC1263DDE877EE03CAC6AF02B6D14CF1FC3FEFA2E';
async function main() {

  let cfx  = new Conflux({
    url: "https://test.confluxrpc.com",
    networkId: 1,
  });

  let balance = await cfx.getBalance("cfxtest:aanb5pcyvd81cvn0yvcb2m6nm6zxy7h33puejr5r2m");
  console.log("balance: ", balance);


  // deploy contract
  let contractData =  fs.readFileSync('./artifacts/contracts/Token.sol/Token.json', {
    encoding: 'utf-8',
    flag: 'r'
  });

  //parse JSON object
   const user = JSON.parse(contractData.toString());
   let {abi, bytecode} = user;
  //deploy contract
  const account = cfx.wallet.addPrivateKey(PRIVATE_KEY);
  console.log(account);
   const contract = cfx.Contract({abi, bytecode});
   const receipt = await contract.constructor(
     "McD",
     "MCD",
     18,
     1000000,
     2000000
   ) .sendTransaction({from: account}).executed();
   console.log(receipt);

}

main().catch(console.log);
