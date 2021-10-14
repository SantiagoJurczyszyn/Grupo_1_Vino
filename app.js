const express = require('express');
const app = express();

const path = require('path')



app.get('/', (req, res) => {res.sendFile(path.join(__dirname, 'views/index.html'))});
app.get('/shop', (req, res) => {res.sendFile(path.join(__dirname, 'views/shop.html'))});
app.get('/product', (req, res) => {res.sendFile(path.join(__dirname, 'views/product.html'))});
app.get('/cart', (req, res) => {res.sendFile(path.join(__dirname, 'views/cart.html'))});
app.get('/register', (req, res) => {res.sendFile(path.join(__dirname, 'views/register.html'))});
app.get('/login', (req, res) => {res.sendFile(path.join(__dirname, 'views/login.html'))});
app.get('/intro', (req, res) => {res.sendFile(path.join(__dirname, 'views/intro.html'))});
app.get ("/index", (req,res) => {res.redirect ("/");})

app.use(express.static('public'));


app.listen(process.env.PORT || 3030, () => console.log('Servidor corriendo'));
