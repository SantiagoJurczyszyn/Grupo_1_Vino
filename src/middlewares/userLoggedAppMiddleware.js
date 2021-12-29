const User = require('.//User')

function userLoggedAppMiddleware (req, res, next)
{
 res.locals.userIsLogged = false;

 let emailInCookie = req.cookies.userEmail;
 let userFromCookie = User.findByField('email', emailInCookie);

 if (userFromCookie) {
    req.session.userLoggedIn = userFromCookie;
 }
 if (req.session.userLoggedIn){
    res.locals.userIsLogged = true;
    // lo pasa a locals para poder mostrarlo en el header
    res.locals.userLoggedIn = req.session.userLoggedIn;
 }
 
 
    
 next();
}

module.exports = userLoggedAppMiddleware