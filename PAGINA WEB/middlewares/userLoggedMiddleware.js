const db = require('../database/models')

function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false


    console.log(res.locals);

    if (req.cookies.userEmail) {

        let emailInCookie = req.cookies.userEmail;

        db.User.findOne({ where: { email: emailInCookie } })
            .then((userFromCookie) => {

                req.session.userLogged = userFromCookie;

            })
            .catch(err => { console.log(err) })

        if (req.session.userLogged) {
            res.locals.isLogged = true;
            res.locals.userLogged = req.session.userLogged;
        }

    }

    next();

}






module.exports = userLoggedMiddleware;