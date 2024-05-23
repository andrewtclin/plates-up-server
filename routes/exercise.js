/**
 * @swagger
 * components:
 *   schemas:
 *     Exercise:
 *       type: object
 *       required:
 *         - exerciseName
 *         - userId
 *       properties:
 *         exerciseId:
 *           type: integer
 *           description: The exercise ID
 *         exerciseName:
 *           type: string
 *           description: The name of the exercise
 *         userId:
 *           type: integer
 *           description: The ID of the user associated with the exercise
 *       example:
 *         exerciseId: 1
 *         exerciseName: Bench Press
 *         userId: 1
 */

/**
 * @swagger
 * tags:
 *   name: Exercise
 *   description: Exercise management API
 */

/**
 * @swagger
 * /apis/v1/exercise:
 *   get:
 *     summary: Retrieve exercises for a user
 *     tags: [Exercise]
 *     parameters:
 *       - in: query
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the user whose exercises are to be retrieved
 *     responses:
 *       200:
 *         description: List of exercises retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Exercise'
 *       404:
 *         description: No exercises found
 *       500:
 *         description: Server error
 *   post:
 *     summary: Create a new exercise
 *     tags: [Exercise]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               exerciseName:
 *                 type: string
 *               userId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Exercise created successfully
 *       500:
 *         description: Server error
 *   put:
 *     summary: Update an exercise
 *     tags: [Exercise]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               exerciseId:
 *                 type: integer
 *               exerciseName:
 *                 type: string
 *               userId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Exercise updated successfully
 *       500:
 *         description: Server error
 *   delete:
 *     summary: Delete an exercise
 *     tags: [Exercise]
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
 *     responses:
 *       200:
 *         description: Exercise deleted successfully
 *       500:
 *         description: Server error
 */

const express = require("express");
const router = express.Router();
const {
  createExercise,
  getExercise,
  deleteExercise,
  updateExercise,
} = require("../controllers/exercise");

router.post("/", createExercise);
router.get("/", getExercise);
router.delete("/", deleteExercise);
router.put("/", updateExercise);

module.exports = router;
