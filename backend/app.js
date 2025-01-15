const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://person1:person1password@cluster0.beb9rpc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

// Question Schema
const questionSchema = new mongoose.Schema({
    company: String,
    category: String,
    question: String
});

const Question = mongoose.model('Question', questionSchema);

// API Routes

// Get questions by company
app.get('/questions/:company', async (req, res) => {
    try {
        const questions = await Question.find({ company: req.params.company });
        res.json(questions);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

// Post a new question
app.post('/questions', async (req, res) => {
    const newQuestion = new Question({
        company: req.body.company,
        category: req.body.category,
        question: req.body.question
    });

    try {
        await newQuestion.save();
        res.status(201).send('Question added successfully');
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
