const jwt = require("jsonwebtoken");
const secretKey = process.env.TOCKEN_SECRET_KEY;
const verifyToken = async (req, res, next) => {
  console.log("first");
  let token = await req.headers.authorization;
  token = token.split(" ")[1];
  if (!token) {
    return res.status(404).json({ message: " Unauthorized user " });
  }
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(400).json({ message: "Invalid token" });
    }
    req.user = decoded;
    next();
  });
};
module.exports = verifyToken;
