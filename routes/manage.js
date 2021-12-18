const express = require('express');
const router = express.Router();
const {erc20Factory} = require('../erc20/erc20Factory')
const {erc20} = require('../erc20/erc20')

router.post('/deploy', (req,res) => {
    const name = req.body.name;
    const symbol = req.body.symbol;
    erc20Factory.deploy20Contract(res, name, symbol);
})

module.exports = router;