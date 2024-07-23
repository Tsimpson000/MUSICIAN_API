const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  //Get token from the request header
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access denied");

  try {
    //Verify token
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid token");
  }
};