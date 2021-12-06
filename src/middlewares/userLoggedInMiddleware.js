function userLoggedInMiddleware (req, res, next)
{
 if (req.session.userLoggedIn)
 {
     // si hay alguien loggeado lo redirijo a shop
    return res.redirect("/products");
 }
 next();
}

module.exports = userLoggedInMiddleware