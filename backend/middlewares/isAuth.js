import jwt from "jsonwebtoken"
const isAuth = async (req, res, next) => {
  try {

    // Read token from Cookies OR Authorization Header
    let token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      // Use 401 (Unauthorized) instead of 400
      return res.status(401).json({ message: "user doesn't have token" })
    }
    let verifyToken = jwt.verify(token, process.env.JWT_SECRET)

    if (!verifyToken) {
      return res.status(400).json({ message: "user doesn't have valid token" })
    }

    req.userId = verifyToken.userId
    next()
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: `is auth error ${error}` })
  }
}
export default isAuth