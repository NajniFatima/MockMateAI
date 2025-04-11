const express = require('express');
const router = express.Router();
const Problem = require('../model/dsaProblem.js');

// GET all problems
router.get('/', async (req, res) => {
  try {
    const problems = await Problem.find();
    res.json(problems);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch problems' });
  }
});

// UPDATE a problem's status
router.put('/:id', async (req, res) => {
  const { status } = req.body;
  try {
    await Problem.findByIdAndUpdate(req.params.id, { status });
    res.sendStatus(200);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update problem status' });
  }
});

module.exports = router;
