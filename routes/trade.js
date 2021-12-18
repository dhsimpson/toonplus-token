const express = require('express');
const router = express.Router();
const {erc20} = require('../erc20/erc20')

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


router.post('/transfer', (req,res) => {
    const contractAddr = req.body.contractAddr;
    const fromAddr = req.body.fromAddr;
    const fromPk = req.body.fromPk;
    const toAddr = req.body.toAddr;
    const amount = req.body.amount;
    erc20.transferFrom(res, contractAddr, fromAddr, fromPk, toAddr, amount);
})

module.exports = router;