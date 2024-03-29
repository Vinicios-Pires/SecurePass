import Joi from "joi";
import { userData } from "../services/authService.js";

export const userSchema = Joi.object<userData>({
	email: Joi.string().email().required(),
	password: Joi.string().min(10).required(),
});
