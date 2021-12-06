const express = require('express');

// necesario para usar sesion
const session = require('express-session');

const app = express();

const mainRouter = require ("./routes/main");
const productsRouter = require ("./routes/products");
const usersRouter = require ("./routes/users");

// Middleware de app para mantener sesion abierta 
const userLoggedAppMiddleware = require('./middlewares/userLoggedAppMiddleware');

const path = require('path')
const cookieParser = require('cookie-parser');
const bcryptjs = require('bcryptjs');

/*Para enviar peticiones por POST es necesario tener un formulario
desde el que se enviaran los datos. Hay que configurar el entorno de 
nuestra aplicación para que sea capaz de capturar esa información
con estas dos lineas PUSE ESTO COMO RECORDATORIO BORRARLO DESPUES*/
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/*los formularios de HTML no soportan los métodos PUT y DELETE 
Hay que configurar app.js para poder sobreescribir el método original e implementarlos 
PUSE ESTO COMO RECORDATORIO BORRARLO DESPUES*/
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// inicializo session (resave y saveUninitialized se agregan para que no de error)
// asi lo explican en el video (alguna vez entenderemos mas!)
app.use(session({
  secret: 'secret VIINO',
  resave: false,
  saveUninitialized: false,
}));

app.use(cookieParser());
// tiene que ir despues de app.use(session)
app.use(userLoggedAppMiddleware);


app.use(express.static(path.join(__dirname, '../public')));
app.set ("view engine", "ejs");
app.set('views', path.join(__dirname, '/views'));


app.use ("/", mainRouter);
app.use ("/products", productsRouter);
app.use ("/users", usersRouter);

// ************ error handler ************
//app.use((req, res, next) => next(createError(404)));

/*
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
}); 
*/

app.listen(process.env.PORT || 3030, () => console.log('Servidor corriendo en el puerto 3030'));
