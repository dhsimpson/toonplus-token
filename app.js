const express = require("express");
const app = express();
const cors = require('cors');
const port = 10001;
const rootRouter = express.Router();
const publishRouter = require("./routes/publish");
const tradeRouter = require("./routes/trade");
const lookUpRouter = require("./routes/lookUp");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/token', rootRouter);
rootRouter.use('/publish', publishRouter);
rootRouter.use('/trade', tradeRouter);
rootRouter.use('/look-up', lookUpRouter);

app.listen(port, () => {
    console.log(`token api server is listening at http://localhost:${port}`);
});