const express = require('express');
const router = express.Router();
const {token} = require('./utils/token');

//wbtTkCd : 웹툰토큰 고유코드값
//tknPlatformAddr : 토큰플랫폼 지갑주소
//autherAddr : 작가 지갑주소
//wbtPlatformAddr : 웹툰플랫폼 지갑주소
//tknAmount : 토큰 발행량
router.post('/gen-token', async(req,res)=>{
    // console.log(req.body);
    
    token.deploy(req.body, res);
    

    //TODO : 작가 이외의 이해관계자에게 토큰 보내는 로직 필요.


    // res.send(`generate token with \n 
    // webtoonName : ${webtoonName} \n 
    // tknPlatformAddr : ${tknPlatformAddr} \n
    // autherAddr : ${autherAddr} \n
    // wbtPlatformAddr : ${wbtPlatformAddr}`);
    //생성 시 웹툰 고유 코드값(wbtTkCd) 생성
    //DB schema : wbtTkCd(pk), webtoonName, 생성된토큰해쉬값
});

router.post('/inc-token', (req,res)=>{
    wbtTkCd, tknPlatformAddr, autherAddr, wbtPlatformAddr, tknAmount = req.body;

    token.mint();
    // res.send(`increase token with \n 
    // wbtTkCd : ${wbtTkCd} \n 
    // tknPlatformAddr : ${tknPlatformAddr} \n
    // autherAddr : ${autherAddr} \n
    // wbtPlatformAddr : ${wbtPlatformAddr}`);
    //DB애서 wbtTkCd 로 해당 웹툰토큰 해쉬값을 가져온 뒤 웹툰 해쉬값 가져옴
    //웹툰토큰 해쉬값으로 토큰 발행
});

module.exports = router;