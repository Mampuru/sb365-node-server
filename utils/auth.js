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
  
  // Middleware to verify JWT
  const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
  
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }
  
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Unauthorized: Invalid token' });
      }
      req.userId = decoded.id; // Attach user ID to request object
      next();
    });
  };
  
  module.exports = {withAuth,verifyToken};
  