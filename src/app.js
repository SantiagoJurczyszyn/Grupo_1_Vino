const express = require('express');
const app = express();
const path = require('path')

// necesario para usar sesion
const session = require('express-session');
const cookieParser = require('cookie-parser');

// Requerir los ruteadores para rutas específicos de APIs
const apiUsersRouter=require("../src/routes/api/users")
const apiProductsRouter=require("../src/routes/api/products")

// Requerir los ruteadores para rutas comunes
const mainRouter = require ("./routes/main");
const productsRouter = require ("./routes/products");
const usersRouter = require ("./routes/users");

// Middleware de app para mantener sesion abierta 
const userLoggedAppMiddleware = require('./middlewares/userLoggedAppMiddleware');

// HTML forms encoded
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// PUT and DELETE method override
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// Sessions
app.use(session({
  secret: 'secret VIINO',
  resave: false,
  saveUninitialized: false,
}));

const bcryptjs = require('bcryptjs');


app.use(cookieParser());
// tiene que ir despues de app.use(session)
app.use(userLoggedAppMiddleware);


app.use(express.static(path.join(__dirname, '../public')));
app.set ("view engine", "ejs");
app.set('views', path.join(__dirname, '/views'));

// URLs específicas de APIs
app.use("/api/users",apiUsersRouter)
app.use("/api/products",apiProductsRouter)

// URLs comunes
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
