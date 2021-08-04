# DEVELP WITH CONFLUX
## js-conflux-sdk 
Many differnt feature Web3.js and js-conflux-sdk. So can not use js-conflux-sdk lile web3.js. 
THe link can give you new ideal about js-conflux-sdk

[Conflux js-sdk与以太坊 js-sdk区别（未完成）](https://juejin.cn/post/6869647455588188168)

However, the package provide rich functions and tools.

## Deploy a contract 

### Get abi/bytecode
If you very familar with nodejs, I thinks is not a problem to get abi/bytescode object.
But in my javascript, i use "fs" to read my complied contract json file, and get above two object,
```js
 let contractData =  fs.readFileSync('./artifacts/contracts/Token.sol/Token.json', {
    encoding: 'utf-8',
    flag: 'r'
  });

  //parse JSON object
   const user = JSON.parse(contractData.toString());
   let {abi, bytecode} = user;

```
### Note
PRIVATE_KEY must be hex;

## Reference
[Interact with contract](https://github.com/Conflux-Chain/js-conflux-sdk/blob/master/docs/interact_with_contract.md)


## file path

deploy contract js at scrip/deploy-script.js

interact with contrac js at script/testnet/getAndUpdateContactState.json

### Test Contract address
ERC20 token address:  cfxtest:acbe6wcdjndj6dfcbj902tcffemw2x1n42kunk4xc6;
operator: me;
ERC20 Token construct set:

``` js
contract.constructor(
     "McD",
     "MCD",
     18,
     1000000,
     2000000
   ) .sendTransaction({from: account}).executed();

```

