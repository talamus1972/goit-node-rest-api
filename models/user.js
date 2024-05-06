import { Schema, model } from "mongoose";
import handleMongooseError from "../helpers/handleMongooseError.js";

contactSchema.post("save", handleMongooseError);
