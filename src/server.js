const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Serve the static files from the React app's build directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle API requests (optional, if you want to add custom server-side API routes)
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

// For any other requests, serve the React app's index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
