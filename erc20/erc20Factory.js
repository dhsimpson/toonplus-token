const Web3 = require("web3")
const erc20_FACT_ABI = require("./erc20FactoryABI.json")
const erc20Factory = "0x3E01928499E12F731FEBaE3D6306B75C8c0c74C8";
const {utils} = require("./utils")

const network = "9aa3d95b3bc440fa88ea12eaa4456161" // 형꺼 kovan
const web3 = new Web3(Web3.givenPewrovider || 'https://kovan.infura.io/v3/' + network);

const ERC20_FACT_CONTRACT = new web3.eth.Contract(erc20_FACT_ABI,erc20Factory);

const adminAddr = '0x49375E0c627269368328c1213d3DB5F75ab9f26A';
const adminPk = '0x389b982f3637d158ee3d7a2b7e31953d579ca6da506c5e4106171bf9080fe10c';


// 0. create a erc20 contract
const deploy20Contract = async(res, name, symbol) => {
    utils.addWallet(web3, adminAddr, adminPk);
    try{
        await ERC20_FACT_CONTRACT.methods.deploy20Contract(name, symbol).send({from:adminAddr, gasLimit : 3000000}).then(result => {
            console.log(result)    
            res.send({status : 200, data: result});
        });
    }catch(e){
        console.error(e)
        res.send({status:403})
    }finally{
        utils.removeWallet(web3, adminAddr);
    }
}

// 1. get all contractAddr
const getAllAddress = async(res) => {
    try{
        await ERC20_FACT_CONTRACT.methods.getAllAddress().call().then(result => {
            res.send({status : 200, data :result});
        });
    }catch(e){
        res.send({status : 403, data : e});
    }
}

exports.erc20Factory = {
    deploy20Contract, getAllAddress
}