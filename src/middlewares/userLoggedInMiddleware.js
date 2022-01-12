function userLoggedInMiddleware(req, res, next) {
    if (req.session.userLoggedIn) {
        // si hay alguien loggeado lo redirijo a shop
        return res.redirect("/users/profile");
    }
    next();
}

module.exports = userLoggedInMiddleware;