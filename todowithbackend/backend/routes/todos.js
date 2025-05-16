const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Get all todos for the authenticated user
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find({ user: req.user._id }).sort({ createdAt: -1 });
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new todo
router.post('/', async (req, res) => {
    try {
        const todo = new Todo({
            ...req.body,
            user: req.user._id
        });
        const savedTodo = await todo.save();
        res.status(201).json(savedTodo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update a todo
router.put('/:id', async (req, res) => {
    try {
        const todo = await Todo.findOneAndUpdate(
            { _id: req.params.id, user: req.user._id },
            req.body,
            { new: true }
        );
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json(todo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a todo
router.delete('/:id', async (req, res) => {
    try {
        const todo = await Todo.findOneAndDelete({ _id: req.params.id, user: req.user._id });
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json({ message: 'Todo deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router; 