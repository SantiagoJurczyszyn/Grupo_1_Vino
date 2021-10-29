const express = require('express');
const app = express();
const mainRouter = require ("./routes/mainRouter");
const productRouter = require ("./routes/productsRouter");
const userRouter = require ("./routes/userRouter");
const path = require('path')

app.use(express.static('public'));
app.set ("view engine", "ejs");
app.set ("views", "./src/views")


app.use ("/", mainRouter);
app.use ("/products", productRouter);
app.use ("/users", userRouter);


app.listen(process.env.PORT || 3030, () => console.log('Servidor corriendo en el puerto 3030'));
