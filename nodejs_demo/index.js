console.log('index.js starting');

const express = require('express');
const app = express();
const port = 3000;

app.get('', (req,res) => {
    console.log('welcome');
    res.send('Welcome to Citi 2024');
});

app.get('/about', (req,res) => {
    console.log('welcome');
    res.send('About Citi');
});

app.get('/contact', (req,res) => {
    console.log('welcome');
    res.send('Citi Contacts');
});

app.listen(port, () => {
    console.log('app is running on port 3000 on localhost');
});

