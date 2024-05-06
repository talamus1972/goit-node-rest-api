import { HttpError } from "../helpers/index.js";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

const { SECRET_KEY } = process.env;

export const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    return next(HttpError(401, "Not authorized"));
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user) {
      return next(HttpError(401, "Not authorized"));
    }
    next();
  } catch (error) {
    next(HttpError(401, "Not authorized"));
  }
};
