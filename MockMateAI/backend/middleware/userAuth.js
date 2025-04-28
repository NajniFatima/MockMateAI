import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
  try {
    // Extract token from cookies
    const { token } = req.cookies;

    // If token is not present, return unauthorized response
    if (!token) {
      return res.status(401).json({ success: false, message: 'Not authorized. Please log in again.' });
    }

    // Verify the token with the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // If decoded token is invalid or doesn't contain the user ID, return unauthorized response
    if (!decoded || !decoded.id) {
      console.log('Decoded user:', decoded);

      return res.status(401).json({ success: false, message: 'Invalid token. Please log in again.' });
    }

    // Attach user ID from token to the request object for further use
    req.user = { id: decoded.id };

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Log error for debugging
    console.error('🔐 Auth Middleware Error:', error.message);

    // Return authentication failure response
    return res.status(401).json({ success: false, message: 'Authentication failed: ' + error.message });
  }
};

export default userAuth;
