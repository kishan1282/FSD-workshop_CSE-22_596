const express = require('express');
const app = express();

// Home Page
app.get('/', (req, res) => {
    res.send(`
        <h1>Sweet Bakery</h1>
        <h2>Welcome to Our Bakery!</h2>
        <p>Fresh and delicious bakery items.</p>
    `);
});

// Menu Page
app.get('/menu', (req, res) => {
    res.send(`
        <h1>Our Bakery Menu</h1>
        <ul>
            <li>Chocolate Cake</li>
            <li>Black Forest Cake</li>
            <li>Pastries</li>
            <li>Cookies</li>
            <li>Bread</li>
        </ul>
    `);
});

// Contact Page
app.get('/contact', (req, res) => {
    res.send(`
        <h1>Contact Us</h1>
        <p>Phone: 9876543210</p>
        <p>Address: Ghaziabad, Uttar Pradesh</p>
    `);
});

// Start Server
app.listen(3000, () => {
    console.log("Bakery website running on port 3000");
});