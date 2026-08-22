const express = require('express');
const app = express();

const PORT = 3000;

// 1. BUILT-IN MIDDLEWARE

// Allows Express to read JSON data
// sent in POST and PUT requests.

app.use(express.json());


// 2. CUSTOM LOGGING MIDDLEWARE

// This middleware runs for EVERY request.

app.use((req, res, next) => {

    const timestamp = new Date().toLocaleString();

    console.log(
        `[${timestamp}] Incoming Request: ${req.method} to ${req.url}`
    );

    // Move to the next middleware / route
    next();
});


// 3. CUSTOM SECURITY MIDDLEWARE


// Checks whether User-Agent exists.

app.use((req, res, next) => {

    const userAgent = req.get('User-Agent');

    if (!userAgent) {
        return res.status(400).json({
            error: "Browser identification missing!"
        });
    }

    next();
});


// MOCK DATABASE

let tasks = [
    {
        id: 1,
        title: "Learn Express"
    },
    {
        id: 2,
        title: "Master REST APIs"
    }
];


// 4. GET - READ ALL TASKS

app.get('/tasks', (req, res) => {

    res.json(tasks);

});


// 5. POST - CREATE NEW TASK

app.post('/tasks', (req, res) => {

    const newTask = {

        id: req.body.id != null
            ? req.body.id
            : tasks.length + 1,

        title: req.body.title
    };

    tasks.push(newTask);

    res.status(201).json(newTask);

});


// 6. PUT - UPDATE TASK

app.put('/tasks/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const task = tasks.find(t => t.id === id);

    if (task) {

        task.title = req.body.title;

        res.json({
            message: "Task updated successfully",
            task: task
        });

    } else {

        res.status(404).json({
            error: "Task not found"
        });

    }

});


// 7. DELETE - DELETE TASK

app.delete('/tasks/:id', (req, res) => {

    const id = parseInt(req.params.id);

    tasks = tasks.filter(t => t.id !== id);

    res.json({
        message: `Task ${id} deleted`,
        remainingTasks: tasks
    });

});


// START SERVER


app.listen(PORT, () => {

    
    console.log(`REST API Server running at http://localhost:${PORT}`);
    console.log("Listening for requests...");
    

});