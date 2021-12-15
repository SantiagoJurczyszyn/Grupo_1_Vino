function authMiddleware(req, res, next) {
	if (!req.session.userLoggedIn) {  // Si no hay un usuario en Session, lo redirigimos
		return res.redirect('/users/login');
	}
	next();
}

module.exports = authMiddleware;