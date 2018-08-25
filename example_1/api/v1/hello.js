var express = require("express");
var hello = express.Router();

/**
 * This function comment is parsed by doctrine
 * @route GET /hello
 * @group hello - Operations about hello
 * @returns {object} 200 - An object of user info
 * @returns {Error}  default - Unexpected error
 */
hello.get("/hello", (req, res) => {
  res
    .status(200)
    .json({ userInfo: { firstname: "Teerapong", lastname: "Singthong" } });
});

hello.get("/hello/:name", (req, res) => {
  res
    .status(200)
    .json({ userInfo: { firstname: "Teerapong", lastname: "Singthong" } });
});

module.exports = hello;
