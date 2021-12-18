const Web3 = require("web3")
const erc20ABI = require("./erc20ABI.json")
const {utils} = require("./utils")

const network = "9aa3d95b3bc440fa88ea12eaa4456161" // 형꺼 kovan
const web3 = new Web3(Web3.givenPewrovider || 'https://kovan.infura.io/v3/' + network);

const adminAddr = '0x49375E0c627269368328c1213d3DB5F75ab9f26A';
const adminPk = '0x389b982f3637d158ee3d7a2b7e31953d579ca6da506c5e4106171bf9080fe10c';



// async function send(){
//     web3.eth.accounts.wallet.add({
//         privateKey : act1Pk,
//         address : act1Addr
//     })
//     const tx = ERC20CONTRACT.methods.transferFrom(act1Addr,act2Addr,30);
//     const options = {
//         to : tx._parent._address,
//         data : tx.encodeABI(),
//         gas : await tx.estimateGas({from:act1Addr}),
//     }
//     const signedTx = await web3.eth.accounts.signTransaction(options, act1Pk);
//     const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
//     return receipt;
// }

// web3.eth.accounts.wallet.add({
//     privateKey : act1Pk,
//     address : act1Addr
// })

// ERC20CONTRACT.methods.transfer(act2Addr,1).send({from:act1Addr, gasLimit : 300000}).then(console.log);
// ERC20CONTRACT.methods.transferFrom(act1Addr,act2Addr,1).send({from:act1Addr, gasLimit : 300000}).then(console.log);

// ERC20CONTRACT.methods.increaseAllowance(act1Addr,10).send({from:act1Addr, gasLimit : 300000}).then(console.log);
// ERC20CONTRACT.methods.allowance(act1Addr,act1Addr).call().then(console.log)


// methods

// 0. get balance
const balanceOf = async(res, contractAddr, addr) => {
    const ERC20CONTRACT = new web3.eth.Contract(erc20ABI,contractAddr);
    try{
        await ERC20CONTRACT.methods.balanceOf(addr).call().then(result => {
            console.log(result);
            res.send({status : 200, data : result});
        });
    }catch(e){
        console.log(e);
        res.send({status : 403, data : e});
    }
}

// 1. transfer from
const transferFrom = async(res, contractAddr, fromAddr, fromPk, toAddr, amount) => {
    utils.addWallet(web3, fromAddr, fromPk);
    const ERC20CONTRACT = new web3.eth.Contract(erc20ABI,contractAddr);
    try{
        await ERC20CONTRACT.methods.increaseAllowance(fromAddr,10).send({from:fromAddr, gasLimit : 300000}).then(console.log);
        await ERC20CONTRACT.methods.transferFrom(fromAddr,toAddr,amount).send({from:fromAddr, gasLimit : 300000}).then(result => {
            console.log(result);
            res.send({status : 200, data : result});
        });
    }catch(e){
        console.log(e)
        res.send({statis : 403, data : e});
    }finally{
        utils.removeWallet(fromAddr);
    }
}


// 2. advance
// transfer from (buy&sell -> 이더로 구매 하는 로직 추가 (uniswap 적용 된 값))

exports.erc20 = {
    balanceOf, transferFrom
}