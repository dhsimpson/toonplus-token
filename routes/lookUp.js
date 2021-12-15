const express = require('express');
const router = express.Router();

//wbtTkCd 조회 할 거래의 토큰 고유 코드
//blkHash 조회 할 거래의 블록해쉬 (조회 조건을 변경해야 하나??)
router.get('/contract', (req,res) => {
    wbtTkCd, blkHash = req.body; // 토큰코드값 없어도 되나??
    //해당 블록해쉬 내의 거래정보 반환
});
//addr : 조회 대상 지갑주소
router.get('/possesion', (req,res) => {
    wbtTkCd, addr = req.body;
    //해당 지갑의 해당 토큰 보유량을 반환
});

router.get('/all', (req,res) => {
    //모든 웹툰토큰의 이름과 고유코드값 반환
    //현재가격도 반환해야 하나??
});

router.get('/market-price', (req,res) => {
    wbtTkCd = req.body;
    //조회 대상 웹툰토큰의 시장가격 반환
});


module.exports = router;