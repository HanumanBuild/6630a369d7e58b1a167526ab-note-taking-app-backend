require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const noteRoutes = require('./routes/noteRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/notes', noteRoutes);

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.log('MongoDB connection error:', err);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});