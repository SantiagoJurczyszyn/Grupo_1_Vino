const express = require('express');
const app = express();

const path = require('path')


app.get('/', (req, res) => {res.sendFile(path.join(__dirname, 'views/index.html'))});
app.get('/', (req, res) => {res.sendFile(path.join(__dirname, 'views/shop.html'))});
app.get('/', (req, res) => {res.sendFile(path.join(__dirname, 'views/product.html'))});
app.get('/', (req, res) => {res.sendFile(path.join(__dirname, 'views/cart.html'))});
app.get('/', (req, res) => {res.sendFile(path.join(__dirname, 'views/register.html'))});
app.get('/', (req, res) => {res.sendFile(path.join(__dirname, 'views/login.html'))});


app.use(express.static('public'));


app.listen(3030, () => console.log('Servidor corriendo'));
