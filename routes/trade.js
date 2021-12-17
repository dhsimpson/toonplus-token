const express = require('express');
const router = express.Router();

const {token} = require('./utils/token');

//wbtTkCd 웹툰토큰 고유 코드
//buyerAddr 매수자 지갑주소
//buyAmount 매수량
//buyPrice 매수가격
router.post('/buy', (req,res) => {
    wbtTkCd, buyerAddr, buyAmount, buyPrice = req.body;
    //응답으로는 매수 요청이 제대로 들어갔는 지 여부
});
//sellerAddr 매도자 지갑주소
//sellerAmount 매도량
//sellerPrice 매도가격
router.post('/sell', (req,res) => {
    wbtTkCd, sellerAddr, sellAmount, sellPrice = req.body;
    //응답으로는 매도 요청이 제대로 들어갔는 지 여부
});

// 실제 거래가 이뤄지는 로직 (토큰 전송)
const transfer = async(body) => {
    token.transfer(body);
}

module.exports = router;