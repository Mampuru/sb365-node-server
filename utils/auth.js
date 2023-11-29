/**
 *  checks if a user is authenticated before allowing access to
 *  certain routes or functionalities in a web application.
 */
const withAuth = (req, res, next) => {
    if (!req.session.userId) {
      res.redirect("/login");
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  