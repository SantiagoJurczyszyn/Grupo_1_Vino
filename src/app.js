const express = require('express');
const app = express();
const mainRouter = require ("./routes/mainRouter");
const productRouter = require ("./routes/productRouter");
const userRouter = require ("./routes/userRouter");
const path = require('path')

/*Para enviar peticiones por POST es necesario tener un formulario
desde el que se enviaran los datos. Hay que configurar el entorno de 
nuestra aplicación para que sea capaz de capturar esa información
con estas dos lineas*/
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
  
/*Los métodos PUT y DELETE no son soportados por los formularios de HTML
Hay que configurar app.js para poder sobreescribir el método original e 
implementar los métodos PUT o DELETE*/
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
  

app.use(express.static('public'));
app.set ("view engine", "ejs");
app.set ("views", "./src/views")


app.use ("/", mainRouter);
app.use ("/product", productRouter);
app.use ("/user", userRouter);


app.listen(process.env.PORT || 3030, () => console.log('Servidor corriendo en el puerto 3030'));
