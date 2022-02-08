const User = require('./User.js')
const db=require("../database/models/index")

function userLoggedAppMiddleware(req, res, next) {
   

   res.locals.userIsLogged = false;

   let emailInCookie = req.cookies.userEmail;
   if (emailInCookie) {
      db.User.findOne({
      where:{
         email:emailInCookie
      }
      })
      .then(user=>{
         if (user) {
         req.session.userLoggedIn = user;
         }
         if (req.session.userLoggedIn) {
         res.locals.userIsLogged = true;
         // lo pasa a locals para poder mostrarlo en el header
         res.locals.userLoggedIn = req.session.userLoggedIn;
         }
         next();
      })
      .catch(error=>console.log(error));
   } else {
    next();  
   }
   
   
}

module.exports = userLoggedAppMiddleware