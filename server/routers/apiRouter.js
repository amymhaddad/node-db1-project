
const express = require("express");
const router = express.Router()

const accountsRouter = require('./accountsRouter');
router.use('/accounts', accountsRouter);

module.exports = router;
