const { Conflux }  = require('js-conflux-sdk');
const fs = require('fs');
const PRIVATE_KEY = '0x9E0C5AC2F0B560FD9792D02BC1263DDE877EE03CAC6AF02B6D14CF1FC3FEFA2E';
async function main() {
   const conflux = new Conflux({
    url: 'https://test.confluxrpc.com',
    networkId: 1,
  });

  const account =  conflux.wallet.addPrivateKey(PRIVATE_KEY);
  let contractData =  fs.readFileSync('./artifacts/contracts/Token.sol/Token.json', {
    encoding: 'utf-8',
    flag: 'r'
  });

  //parse JSON object
  const user = JSON.parse(contractData.toString());
  let {abi} = user;

  const contract = conflux.Contract({abi, address: 'cfxtest:acbe6wcdjndj6dfcbj902tcffemw2x1n42kunk4xc6'});

  const name = await contract.name();

  console.log(name);

  const balance = await contract.balanceOf(account.address);
  console.log(balance);

//  const operatorMint = await contract.mint(account.address, 10).sendTransaction({ from: account });

  // console.log(operatorMint);

  const operatorBalance = await contract.balanceOf(account.address);
  console.log(operatorBalance);

  // transfer account token to other account
  const otherAccount = 'cfxtest:aam9gmv0t2b816x3w9mxr6mpnmjwmdyt222amk7jrb';
  // const transferHash = await contract.transfer(otherAccount, 10).sendTransaction({ from: account });
  // console.log(transferHash);
  // check otherAccount balance
  const otherBalance = await contract.balanceOf(otherAccount);
  console.log(otherBalance);


}

main();
