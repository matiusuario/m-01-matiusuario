import { User } from "../models/user.model.js";

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

userCtrl.postUser = async (req, res) => {
	try {
		const { username, password, email, avatarUrl } = req.body;
		const newUser = new User({
			"username": username,
			"password": password,
			"email": email,
			"avatarUrl": avatarUrl
		});
		const saved = await newUser.save();
		return res.json(saved);
	} catch (err) {
		console.error("Error al guardar user en la BD", err);
		res.status(500).send("Error al guardar el usuario en la base de datos");
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

export { userCtrl };
