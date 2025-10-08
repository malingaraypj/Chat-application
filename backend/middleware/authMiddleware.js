import AppError from "../utils/AppError.js";
import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    throw new AppError("Not authorized to access this route");
  }

  const decode = jwt.verify(token, process.env.JWT_SECRET);
  req.user = decode.id;

  console.log("Decoded User ID:", req.user);
  next();
};
