const express = require("express");
const router = express.Router();
// const hello = require("./api/v1/hello");

// router.use("/v1", hello);

// module.exports = router;
// Sets up the routes.

/**
 * @swagger
 * /:
 *   get:
 *     description: Returns the homepage
 *     responses:
 *       200:
 *         description: hello world
 */
router.get("/", (req, res) => {
  res.send("Hello World!");
});

/**
 * @swagger
 * definitions:
 *   Login:
 *     required:
 *       - username
 *       - password
 *     properties:
 *       username:
 *         type: string
 *       password:
 *         type: string
 *       path:
 *         type: string
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management and login
 */

/**
 * @swagger
 * tags:
 *   - name: Login
 *     description: Login
 *   - name: Accounts
 *     description: Accounts
 */

/**
 * @swagger
 * /login:
 *   post:
 *     description: Login to the routerlication
 *     tags: [Users, Login]
 *     produces:
 *       - routerlication/json
 *     parameters:
 *       - $ref: '#/parameters/username'
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login
 *         schema:
 *           type: object
 *           $ref: '#/definitions/Login'
 */
router.post("/login", (req, res) => {
  res.json(req.body);
});

/**
 * @swagger
 * /users:
 *   get:
 *     description: Returns users
 *     tags:
 *      - Users
 *     produces:
 *      - routerlication/json
 *     responses:
 *       200:
 *         description: users
 */
router.get("/users", (req, res) => {
  res.json({
    username: "jsmith"
  });
});

/**
 * @swagger
 * /users:
 *   post:
 *     description: Returns users
 *     tags: [Users]
 *     produces:
 *       - routerlication/json
 *     parameters:
 *       - $ref: '#/parameters/username'
 *     responses:
 *       200:
 *         description: users
 */
router.post("/users", (req, res) => {
  res.json(req.body);
});

module.exports = router;
