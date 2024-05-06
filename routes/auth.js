import express from "express";
import { validateBody } from "../middlewares/index.js";
import { registerSchema, loginSchema } from "../schemas/usersSchemas.js";
import { register, login } from "../controllers/auth.js";

const authRouter = express.Router();

authRouter.post("/register", validateBody(registerSchema), register);
authRouter.post("/login", validateBody(registerSchema), login);

export default authRouter;
