const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    let token = req.get("authorization");
    token = token && token.split(" ")[1];
    
    jwt.verify(token, process.env.SEED, (error, payload) => {
        if (error) {
            console.log("Invalid token, forced to signout!");
            res.status(401).json({
                ok: false,
                error: {message: "Invalid token"}
            })
        } else {
            console.log(payload.user.username, "has logged in!");
            next();
        }
    });
};

const verifyAdmin = (req, res, next) => {
  let token = req.get("authorization");
  token = token && token.split(" ")[1];
  const decoded = jwt.decode(token);
  
    if(decoded.user?.role !== "ADMIN") {
      return res.status(403).json({
        ok: false,
        err: {message: "Forbidden"},
      });
    } else {
      next();
    }
  
  };

module.exports = {verifyToken, verifyAdmin};