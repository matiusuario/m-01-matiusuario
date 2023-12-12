import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const SECRET = process.env.SECRET;

const userCtrl = {};

userCtrl.getUsers = async (req, res) => {
	try {
		const user = await User.find();
		return res.json(user);
	} catch (err) {
		console.error("Error al obtener user de la BD", err);
		res.status(500).send("Error al obtener los usuarios de la base de datos");
	}
}

userCtrl.signUpUser = async (req, res) => {
	try {
		const { username, password, email, avatarUrl } = req.body;
		const hashedPassword = await bcrypt.hash(password, 10);
		const newUser = new User({
			"username": username,
			"password": hashedPassword,
			"email": email,
			"avatarUrl": avatarUrl
		});
		const saved = await newUser.save();
		return res.json(saved);
	} catch (err) {
		console.error("Error al guardar user en la BD", err);
		res.status(500).send("Error al registrar el usuario");
	}
}

userCtrl.deleteUser = async (req, res) => {
	try {
		const { _id } = req.params;
		const deleted = await User.findByIdAndDelete(_id);
		if (!deleted) {
			return res.json({"message": "No se encontró el usuario"});
		}
		return res.json(deleted);
	} catch (err) {
		console.error("Error al eliminar user de la BD", err);
		res.status(500).send("Error al eliminar el usuario de la base de datos");
	}
}

userCtrl.loginUser = async (req, res) => {
	try {
		const { username, password } = req.body;
		const user = await User.findOne({ username: username });
		if (!user) {
			return res.json({"message": "usuario o contraseña incorrectos"});
		}
		const isCorrect = await bcrypt.compare(password, user.password);
		if (!isCorrect) {
			return res.json({"message": "usuario o contraseña incorrectos"});
		}
		const token = jwt.sign({_id: user._id}, SECRET)
		return res.json({token});
	} catch (err) {
		console.error("Error al iniciar sesión", err);
		res.status(500).send("Error al iniciar sesión");
	}
}

export { userCtrl };
