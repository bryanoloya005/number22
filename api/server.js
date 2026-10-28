require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors'); // <-- Import the cors package
const app = express();

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV !== 'production') {
    app.use(express.static(path.join(__dirname, '..', 'public')));
}


// Locally you need to listen; on Vercel this is ignored
if (process.env.NODE_ENV !== 'production') {
    app.listen(3000, () => console.log('Local server on http://localhost:3000'));
}
module.exports = app;