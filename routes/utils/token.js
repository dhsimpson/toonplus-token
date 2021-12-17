const Caver = require('caver-js');
const caver = new Caver('https://api.baobab.klaytn.net:8651/');



// 새 웹툰토큰 발행
const deploy = async(body, res) => {

    const {webtoonName, tknSymbol, tknPlatformAddr, autherAddr, autherPk, wbtPlatformAddr, tknAmount} = body;

    const auther_keyRing = new caver.wallet.keyring.singleKeyring(autherAddr, autherPk);
    caver.wallet.add(auther_keyRing);

    await caver.kct.kip7.deploy({
        name : webtoonName,
        Symbol : tknSymbol,
        decimals : 18,
        initialSupply : tknAmount
    }, autherAddr).then(data =>{
        //TODO : data 로 부터 토큰 주소 뽑아 db에 저장하는 로직 추가
        caver.wallet.remove(autherAddr);
        console.log(data)
        res.send({status: 200, data: data});
    });
}

// 실제 거래가 이뤄지는 로직 (토큰 전송)
const transfer = async(body) => {
    const {res, fromAddr, fromPk, toAddr, amount} = body;
    const from_keyRing = new caver.wallet.keyring.singleKeyring(fromAddr, fromPk);
    caver.wallet.add(from_keyRing);
    await kip7.transfer(toAddr,amount,{from:fromAddr}).then(data => { //TODO : {from : fromAddr} 는 플랫폼 지갑으로 하는게 맞겠지?? 바꾸자!
        console.log(data);
        //TODO : 토큰 전송 완료 여부 알람 보내는 로직 추가.
        //TODO : klay 일부를 수수료 이해관계자에게 보내는 로직 추가.
        caver.wallet.remove(fromAddr);
        res.send({status:200, data:data});
    });
}

// 토큰 추가 발행
const mint;

// 토큰 일부 제거
const burn;

exports.token = {
    deploy, transfer, mint, burn;
}