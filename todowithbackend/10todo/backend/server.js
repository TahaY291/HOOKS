const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRoutes = require('./routes/todos');
const authRoutes = require('./routes/auth');
const auth = require('./middleware/auth');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/todoapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('MongoDB connection error:', error));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/todos', auth, todoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 