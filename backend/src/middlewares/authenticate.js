import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const SECRET = process.env.SECRET;

const authenticate = async (req, res, next) => {

	try {
		const { authorization } = req.headers;

		if (!authorization) {
			return res.sendStatus(401);
		}
		const { _id } = jwt.verify(authorization, SECRET);
		const user = User.findById(_id);
		if (!user) {
			return res.sendStatus(401);
		}
		req.user = user;
		next();
	} catch (error) {
		return res.sendStatus(401);
	}
}

export { authenticate };