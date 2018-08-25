# Demo Express Swagger Auto Generator

With this simple demo how express generate swagger api specification with out changing existing code. Here is repsototy that are you should looking for.

This repository is a playground to apply several mode module that likely I needed.

## Example 1

**JSDoc Style**

```
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
```

## Example 2

Auto generate swagger

## Example 3

**JS Doc Style**

```
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
```

