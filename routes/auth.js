import express from "express";
import { validateBody, authenticate, isValidId } from "../middlewares/index.js";
import {
  registerSchema,
  updateSubscriptionSchema,
} from "../schemas/usersSchemas.js";
import {
  register,
  login,
  getCurrent,
  logout,
  updateSubscriptionContact,
} from "../controllers/auth.js";

const authRouter = express.Router();

authRouter.post("/register", validateBody(registerSchema), register);
authRouter.post("/login", validateBody(registerSchema), login);

authRouter.get("/current", authenticate, getCurrent);
authRouter.post("/logout", authenticate, logout);

authRouter.patch(
  "/:id/subscription",
  authenticate,
  isValidId,
  validateBody(updateSubscriptionSchema),
  updateSubscriptionContact
);

export default authRouter;
