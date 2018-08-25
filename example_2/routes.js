const express = require("express");
const router = express.Router();
const hello = require("./api/v1/hello");

router.use("/v1", hello);

module.exports = router;
