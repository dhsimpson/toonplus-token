const express = require('express');
const router = express.Router();
const {erc20Factory} = require('../erc20/erc20Factory')
const {erc20} = require('../erc20/erc20')

router.get('/all', (req,res) => {
    erc20Factory.getAllAddress(res);
});

router.get('/getBalance', (req,res) => {
    const contractAddr = req.body.contractAddr;
    const addr = req.body.addr;

    erc20.balanceOf(res, contractAddr, addr);
})

module.exports = router;