const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send(
        '<h1>Welcome to Waste management System</h1>' +
        '<p>You have reached the Waste management System Home Page.</p>'
    );
});

app.get('/about', (req, res) => {
    res.send(
        'This Waste management system Portal was created using Express.js.'
    );
});

app.get('/api/student', (req, res) => {
    res.json({
        name: "Thammayee",
        email: "admin@gmail.com",
        category: "admin",
        typeofWaste: "Cotton"
    });
});

app.get('/api/status', (req, res) => {
    res.json({
        active: true,
        version: "1.0.0",
        message: "Waste Disposal Portal is running successfully"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});