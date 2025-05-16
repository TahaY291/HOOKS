const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Signup
router.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = new User({ email, password });
        await user.save();
        
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || 'your-secret-key');
        res.status(201).json({ 
            user: { 
                _id: user._id,
                email: user.email 
            }, 
            token 
        });
    } catch (error) {
        console.error('Signup error:', error);
        res.status(400).json({ message: 'Error creating user' });
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || 'your-secret-key');
        res.json({ 
            user: { 
                _id: user._id,
                email: user.email 
            }, 
            token 
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Error logging in' });
    }
});

module.exports = router; 