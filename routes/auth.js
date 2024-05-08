import express from "express";
import { validateBody, authenticate } from "../middlewares/index.js";
import { registerSchema } from "../schemas/usersSchemas.js";
import { register, login } from "../controllers/auth.js";
import { getCurrent } from "../controllers/auth.js";

const authRouter = express.Router();

authRouter.post("/register", validateBody(registerSchema), register);
authRouter.post("/login", validateBody(registerSchema), login);

authRouter.get("/current", authenticate, getCurrent)

export default authRouter;
