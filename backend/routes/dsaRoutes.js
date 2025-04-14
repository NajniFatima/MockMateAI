const express = require('express');
import { dsa_problems } from '../controllers/dsaController.js'
import auth from '../middleware/auth.js';

const router = express.Router();



// const Problem = require('../model/dsaProblem.js');

// GET all problems
router.get('/', auth, dsa_problems);

// // UPDATE a problem's status
// router.put('/:id', async (req, res) => {
//   const { status } = req.body;
//   try {
//     await Problem.findByIdAndUpdate(req.params.id, { status });
//     res.sendStatus(200);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to update problem status' });
//   }
// });

export default router;
