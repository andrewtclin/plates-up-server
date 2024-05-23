/**
 * @swagger
 * components:
 *   schemas:
 *     Progress:
 *       type: object
 *       required:
 *         - exerciseId
 *         - userId
 *         - weights
 *       properties:
 *         progressId:
 *           type: integer
 *           description: The progress ID
 *         exerciseId:
 *           type: integer
 *           description: The exercise ID
 *         userId:
 *           type: integer
 *           description: The user ID
 *         weights:
 *           type: number
 *           description: The weights lifted
 *       example:
 *         progressId: 1
 *         exerciseId: 1
 *         userId: 1
 *         weights: 100
 */

/**
 * @swagger
 * tags:
 *   name: Progress
 *   description: Progress management API
 */

/**
 * @swagger
 * /apis/v1/progress:
 *   get:
 *     summary: Retrieve progress for a user
 *     tags: [Progress]
 *     parameters:
 *       - in: query
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the user whose progress is to be retrieved
 *     responses:
 *       200:
 *         description: List of progress entries retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Progress'
 *       500:
 *         description: Server error
 *   post:
 *     summary: Create a new progress entry
 *     tags: [Progress]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               exerciseId:
 *                 type: integer
 *               userId:
 *                 type: integer
 *               weights:
 *                 type: number
 *     responses:
 *       200:
 *         description: Progress created successfully
 *       500:
 *         description: Server error
 */

const express = require("express");
const router = express.Router();
const { newProgress, getProgress } = require("../controllers/progress");

router.post("/", newProgress);
router.get("/", getProgress);

module.exports = router;
