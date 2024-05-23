/**
 * @swagger
 * components:
 *   schemas:
 *     LoginRequest:
 *       type: object
 *       required:
 *         - username
 *         - password
 *       properties:
 *         username:
 *           type: string
 *           description: The user's username
 *         password:
 *           type: string
 *           description: The user's password
 *       example:
 *         username: testuser
 *         password: testpassword
 *     LoginResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           description: Indicates if the login was successful
 *       example:
 *         success: true
 *   responses:
 *     LoginSuccess:
 *       description: Login was successful
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginResponse'
 *     LoginFailure:
 *       description: Login failed
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginResponse'
 */

/**
 * @swagger
 * tags:
 *   name: Login
 *   description: User login API
 */

/**
 * @swagger
 * /apis/v1/login:
 *   post:
 *     summary: Login a user
 *     tags: [Login]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *       200:
 *         description: Login was successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *       500:
 *         description: Server error
 */

const express = require("express");
const router = express.Router();
const { loginUser } = require("../controllers/login");

router.post("/", loginUser);

module.exports = router;
