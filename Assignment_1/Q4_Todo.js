const express = require('express');
const app = express();

app.use(express.json());

let tasks = [
    { id: 1, task: "Study JavaScript", completed: false },
    { id: 2, task: "Complete Assignment", completed: false }
];

// GET - Display all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// POST - Add new task
app.post('/tasks', (req, res) => {
    const newTask = {
        id: Date.now(),
        task: req.body.task,
        completed: false
    };

    tasks.push(newTask);
    res.json(newTask);
});

// PUT - Mark task completed
app.put('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id == req.params.id);

    if (task) {
        task.completed = true;
        res.json(task);
    } else {
        res.status(404).send("Task not found");
    }
});

// DELETE - Remove task
app.delete('/tasks/:id', (req, res) => {
    tasks = tasks.filter(t => t.id != req.params.id);
    res.send("Task deleted successfully");
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});