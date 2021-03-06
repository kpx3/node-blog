// Used for routes that require a user to be specifically logged in or out.
module.exports = {
  isUserLoggedIn: function(req) {
    return !!req.session.loggedIn;
  },
  loggedIn: function(flag) {
    return (function(req, res, next) {
      if (!!req.session.loggedIn === flag) {
        next();
      } else {
        res.redirect(303, '/');
      }
    });
  }
};
